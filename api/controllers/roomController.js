const { Room, User, User_Room, Mission } = require("../models");
const responseMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");
const createPairs = require("../services/createPairs");
const generateCode = require("../services/generateCode");

// TODO: user authentication
// TODO: Data validation
module.exports = {
  createRoom: async (req, res) => {
    const { roomName, expiration, missionContents } = req.body;
    const invitationCode = generateCode();
    const { id: userId } = req.user;
    try {
      const user = await User.findOne({ where: { id: userId } });
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
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.CREATE_ROOM_SUCCESS,
            room,
          ),
        );
    } catch (error) {
      console.log(error);
      // Handle unique constraint error if there is any
      //   if (error instanceof UniqueConstraintError) {
      //     await this.createRoom();
      //   } else {
      //   console.log(Object.getPrototypeOf(error));
      //   console.log(error.constructor);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR,
          ),
        );
    }
  },
  getAllRooms: async (req, res) => {
    try {
      const rooms = await Room.findAll({
        attributes: [
          "id",
          "roomName",
          "expiration",
          "invitationCode",
          "creatorId",
        ],
      });
      if (!rooms) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(
            util.fail(
              statusCode.BAD_REQUEST,
              responseMessage.GET_ALL_ROOMS_FAIL,
            ),
          );
      }
      console.log(rooms);

      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.GET_ALL_ROOMS_SUCCESS,
            rooms,
          ),
        );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR,
          ),
        );
    }
  },

  // TODO: user verification
  getOneRoom: async (req, res) => {
    const { roomId } = req.params;

    try {
      const room = await Room.findOne({
        where: { id: roomId },
        attributes: ["id", "roomName", "expiration", "invitationCode"],
        include: [
          {
            model: User,
            as: "Creator",
            attributes: ["id", "username", "serialNumber"],
          },
          {
            model: Mission,
            attributes: ["id", "content"],
          },
          {
            model: User,
            as: "Members",
            attributes: ["id", "username"],
            through: {
              as: "relations",
              attributes: ["SantaUserId", "ManittoUserId"],
            },
          },
        ],
      });
      if (!room) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(
            util.fail(
              statusCode.BAD_REQUEST,
              responseMessage.GET_ONE_ROOM_FAIL,
            ),
          );
      }
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.GET_ONE_ROOM_SUCCESS,
            room,
          ),
        );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR,
          ),
        );
    }
  },
  deleteRoom: async (req, res) => {
    const { roomId } = req.params;
    try {
      await Room.destroy({
        where: { id: roomId },
      });
      res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, responseMessage.DELETE_ROOM_SUCCESS));
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR,
          ),
        );
    }
  },
  enterRoom: async (req, res) => {
    const { invitationCode } = req.body;
    const { id: UserId } = req.user;

    try {
      const room = await Room.findOne({
        where: { invitationCode },
        attributes: ["id", "roomName", "expiration", "invitationCode"],
      });
      if (!room) {
        return res
          .status(statusCode.NOT_FOUND)
          .send(util.fail(statusCode.NOT_FOUND, responseMessage.INVALID_CODE));
      }
      const RoomId = room.id;
      const [newMember, created] = await User_Room.findOrCreate({
        where: {
          RoomId,
          UserId,
        },
      });
      if (!created) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.DUPLICATE_MEMBER),
          );
      } else {
        return res.status(statusCode.OK).send(
          util.success(statusCode.OK, responseMessage.ROOM_ENTER_SUCCESS, {
            room,
            newMember,
          }),
        );
      }
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR,
          ),
        );
    }
  },
  matchPairs: async (req, res) => {
    const { RoomId } = req.body;
    const { id: currentUserId } = req.user;
    try {
      // const creator = await User.findOne({where:{userId }})
      const room = await Room.findOne({ where: { id: RoomId } });
      console.log(typeof room.creatorId);
      if (room.creatorId !== currentUserId) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NOT_CREATOR));
      }
      const members = await User_Room.findAll({
        where: { RoomId },
      });
      const dataBeforeMatching = members.map((member) => member.dataValues);
      console.log(dataBeforeMatching);
      const dataAfterMatching = createPairs(dataBeforeMatching);
      await Promise.all(
        dataAfterMatching.map(
          async (d) =>
            await User_Room.update(
              {
                SantaUserId: d.SantaUserId,
                ManittoUserId: d.ManittoUserId,
              },
              { where: { UserId: d.UserId } },
            ),
        ),
      );
      const updatedMembers = await User_Room.findAll({
        where: { RoomId },
      });
      // console.log(test);
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.MATCHING_SUCCESS,
            updatedMembers,
          ),
        );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR,
          ),
        );
    }
  },
};
