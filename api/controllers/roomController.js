const Op = require("sequelize/lib/operators");
const { Room, User, User_Room, Mission } = require("../models");
const responseMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");
const createPairs = require("../services/createPairs");
const generateCode = require("../services/generateCode");
const shuffleArray = require("../services/shuffleArray");
const slackAPI = require("../middlewares/slackAPI");

// TODO: user authentication
// TODO: Data validation
module.exports = {
  createRoom: async (req, res) => {
    const { roomName, expiration, missionContents } = req.body;
    if (!roomName || !expiration) {
      const CONTEXT = `[CREATE_ROOM]`;
      const responseMsg = responseMessage.NULL_VALUE;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
      ${JSON.stringify(responseMsg)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    const invitationCode = generateCode();
    const { id: userId } = req.user;

    try {
      const user = await User.findOne({
        where: { id: userId, isDeleted: false },
      });
      const room = await Room.create({
        roomName,
        expiration,
        invitationCode,
      });
      if (missionContents) {
        missionContents.map(async (content) => {
          const mission = await Mission.create({ content });
          await room.addMission(mission);
        });
      }
      await User_Room.create({ RoomId: room.id, UserId: user.id });
      await user.addRoom(room);
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATE_ROOM_SUCCESS, room));
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[CREATE_ROOM] (roomName: ${roomName}, expiration: ${expiration}, missionContents: ${missionContents})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} \n ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
  getAllRooms: async (req, res) => {
    try {
      const rooms = await Room.findAll({
        attributes: ["id", "roomName", "invitationCode", "creatorId", "expiration", "createdAt"],
        where: { isDeleted: false },
      });
      if (!rooms) {
        const CONTEXT = `[GET_ALL_ROOMS]`;
        const responseMsg = responseMessage.GET_ALL_ROOMS_FAIL;
        const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl}
        ${JSON.stringify(responseMsg)}`;
        slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.GET_ALL_ROOMS_FAIL));
      }

      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.GET_ALL_ROOMS_SUCCESS, rooms));
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = "[GET_ALL_ROOMS]";
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl}  
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },

  // TODO: user verification
  getOneRoom: async (req, res) => {
    const { roomId } = req.params;

    try {
      const room = await Room.findOne({
        where: { id: roomId, isDeleted: false },
        attributes: ["id", "roomName", "invitationCode", "isMatchingDone", "expiration", "createdAt"],
        include: [
          {
            model: User,
            as: "Creator",
            attributes: ["id", "username", "serialNumber"],
            where: { isDeleted: false },
            required: false,
          },
          {
            model: Mission,
            attributes: ["content"],
            where: { isDeleted: false },
            required: false,
          },
          {
            model: User,
            as: "Members",
            attributes: ["id", "username"],
            where: { isDeleted: false },
            required: false,
            through: {
              as: "relations",
              attributes: ["SantaUserId", "ManittoUserId"],
              where: { isDeleted: false },
              required: false,
            },
          },
        ],
      });
      if (!room) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.GET_ONE_ROOM_FAIL));
      }
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.GET_ONE_ROOM_SUCCESS, room));
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[GET_ONE_ROOM] (rId: ${roomId})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl}  
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
  deleteRoom: async (req, res) => {
    const { roomId } = req.params;
    try {
      const room = await Room.findOne({ where: { id: roomId } });
      room.isDeleted = true;
      await room.save();
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.DELETE_ROOM_SUCCESS));
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[DELETE_ROOM] (rId: ${roomId})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
  enterRoom: async (req, res) => {
    const { invitationCode } = req.body;
    if (!invitationCode) {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    const { id: UserId } = req.user;

    try {
      const room = await Room.findOne({
        where: { invitationCode, isDeleted: false },
        attributes: ["id", "roomName", "expiration", "invitationCode", "isMatchingDone"],
      });
      if (!room) {
        return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.INVALID_CODE));
      }
      if (room.isMatchingDone) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_MATCHED));
      }
      const RoomId = room.id;
      const [_, created] = await User_Room.findOrCreate({
        where: {
          RoomId,
          UserId,
          isDeleted: false,
        },
      });
      if (!created) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.DUPLICATE_MEMBER));
      } else {
        const user = await User.findOne({
          where: { id: UserId, isDeleted: false },
          attributes: ["id", "username"],
        });
        return res.status(statusCode.OK).send(
          util.success(statusCode.OK, responseMessage.ROOM_ENTER_SUCCESS, {
            room,
            user,
          })
        );
      }
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[ENTER_ROOM] (invitationCode: ${invitationCode})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
  exitRoom: async (req, res) => {
    const { roomId } = req.body;
    try {
      const room = await Room.findOne({
        where: { id: roomId, isDeleted: false },
      });
      if (!room) {
        return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.GET_ONE_ROOM_FAIL));
      }
      if (room.isMatchingDone === true) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_MATCHED));
      if (room.creatorId === req.user.id) {
        // const userRooms = await User_Room.findAll({ where: { roomId } });
        await User_Room.update({ isDeleted: true }, { where: { roomId } });
        room.isDeleted = true;
        await room.save();
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.ROOM_EXPLODE_SUCCESS));
      }
      const userRoom = await User_Room.findOne({
        where: { userId: req.user.id, roomId, isDeleted: false },
      });
      if (!userRoom) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.NOT_IN_ROOM));
      userRoom.isDeleted = true;
      await userRoom.save();
      return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.ROOM_EXIT_SUCCESS));
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[EXIT_ROOM] (rId: ${roomId})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
  matchPairs: async (req, res) => {
    const { roomId } = req.body;
    const { id: currentUserId } = req.user;
    try {
      const room = await Room.findOne({
        where: { id: roomId, isDeleted: false },
      });
      if (!room) {
        const CONTEXT = `[MATCH_PAIRS]`;
        const responseMsg = responseMessage.GET_ONE_ROOM_FAIL;
        const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
        ${JSON.stringify(responseMsg)}`;
        slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.GET_ONE_ROOM_FAIL));
      }
      if (room.creatorId !== currentUserId) {
        const CONTEXT = `[MATCH_PAIRS]`;
        const responseMsg = responseMessage.NOT_CREATOR;
        const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
        ${JSON.stringify(responseMsg)}`;
        slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NOT_CREATOR));
      }
      const members = await User_Room.findAll({
        where: { RoomId: roomId, isDeleted: false },
      });

      // 마니또 & 산타 매칭
      const dataBeforeMatching = members.map((member) => member.dataValues);
      const dataAfterMatching = createPairs(dataBeforeMatching);
      // console.log("dataAfterMatching", dataAfterMatching);

      // 미션 매칭
      let roomMissions = await Mission.findAll({
        where: { roomId, isDeleted: false },
      });
      shuffleArray(roomMissions);
      // console.log("roomMissions", roomMissions);
      await Promise.all(
        dataAfterMatching.map(async (d, index) => {
          const options = {
            SantaUserId: d.SantaUserId,
            ManittoUserId: d.ManittoUserId,
            PairMissionId: roomMissions.length === 0 ? null : roomMissions[index].id,
          };

          await User_Room.update(options, {
            where: { RoomId: roomId, UserId: d.UserId, isDeleted: false },
          });
        })
      );
      // console.log("roomId", roomId);
      const updatedMembers = await User_Room.findAll({
        where: { RoomId: roomId, isDeleted: false },
        attributes: ["UserId", "SantaUserId", "ManittoUserId", "RoomId"],
        include: [{ model: Mission, as: "MyMission", attributes: ["content"] }],
      });
      await room.update({ isMatchingDone: true });
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MATCHING_SUCCESS, updatedMembers));
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[MATCH_PAIRS] (rId: ${roomId})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
  getMyRelations: async (req, res) => {
    const { id: userId } = req.user;
    const { roomId } = req.params;
    try {
      const myRelations = await User_Room.findOne({
        where: { RoomId: roomId, UserId: userId, isDeleted: false },
        // attributes: ["UserId", "SantaUserId", "ManittoUserId", "RoomId"],
        include: [{ model: Mission, as: "MyMission", attributes: ["content"] }],
      });
      if (!myRelations) {
        const CONTEXT = `[GET_MY_RELATIONS]`;
        const responseMsg = responseMessage.NOT_IN_ROOM;
        const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
        ${JSON.stringify(responseMsg)}`;
        slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
        return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.NOT_IN_ROOM));
      }
      const santaMember = await User_Room.findOne({
        where: {
          RoomId: roomId,
          UserId: myRelations.SantaUserId,
          isDeleted: false,
        },
        include: [{ model: Mission, as: "MyMission", attributes: ["content"] }],
      });
      let MissionToMe = null;
      let SantaUsername = null;
      if (santaMember) {
        MissionToMe = santaMember.dataValues.MyMission;
        const santaUser = await User.findOne({
          where: { id: myRelations.SantaUserId, isDeleted: false },
        });
        SantaUsername = santaUser.dataValues.username;
      }
      let ManittoUsername = null;
      const manittoUser = await User.findOne({
        where: { id: myRelations.ManittoUserId, isDeleted: false },
      });
      if (manittoUser) {
        ManittoUsername = manittoUser.dataValues.username;
      }
      res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.GET_MY_RELATIONS_SUCCESS, {
          ...myRelations.dataValues,
          MissionToMe,
          SantaUsername,
          ManittoUsername,
        })
      );
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[GET_MY_RELATIONS] (rId: ${roomId})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
  updateOneRoom: async (req, res) => {
    const { roomId } = req.params;
    const { roomName, expiration } = req.body;

    try {
      const room = await Room.findOne({
        where: { id: roomId, isDeleted: false },
      });
      if (!room) {
        const CONTEXT = `[UPDATE_ONE_ROOM]`;
        const responseMsg = responseMessage.NOT_CREATOR;
        const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
        ${JSON.stringify(responseMsg)}`;
        slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
        return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.UPDATE_ROOM_FAIL));
      }
      if (+room.creatorId !== +req.user.id) return res.status(statusCode.FORBIDDEN).send(util.fail(statusCode.FORBIDDEN, responseMessage.NOT_CREATOR));
      room.roomName = roomName || room.roomName;
      room.expiration = expiration || room.expiration;
      await room.save();
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.UPDATE_ROOM_SUCCESS, room));
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[UPDATE_ONE_ROOM] (rId: ${roomId}, roomName: ${roomName}, expiration: ${expiration})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
};
