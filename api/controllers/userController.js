const { User, Room, User_Room, Mission } = require("../models");
const jwt = require("../modules/jwt");
const responseMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");
const generateCode = require("../services/generateCode");

// TODO: populate rooms
module.exports = {
  signin: async (req, res) => {
    const { username, serialNumber } = req.body;

    // TODO: error handling
    if (!username || !serialNumber) {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const [user, created] = await User.findOrCreate({
        where: { username, serialNumber },
      });
      if (!created) {
        return res
          .status(statusCode.CONFLICT)
          .send(util.fail(statusCode.CONFLICT, responseMessage.ALREADY_USER));
      }
      const { accessToken } = await jwt.sign(user);
      // Begin Apple App TEST
      // const roomName = `${username}'s room`;
      // const expiration = "2020-12-30 00:00:00";
      // const invitationCode = generateCode();
      // const room = await Room.create({ roomName, expiration, invitationCode });
      // const missionContents = [
      //   "mission 1",
      //   "mission 2",
      //   "mission 3",
      //   "mission 4",
      // ];
      // missionContents.map(async (content) => {
      //   const mission = await Mission.create({ content });
      //   await room.addMission(mission);
      // });
      // const allUsers = await User.findAll();
      // allUsers.map(async (u) => {
      //   await User_Room.create({
      //     RoomId: room.id,
      //     UserId: u.id,
      //   });
      // });

      // await user.addRoom(room);
      // await User_Room.create({ RoomId: room.id, UserId: user.id });
      // End TEST
      res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.CREATE_USER_SUCCESS, {
          ...user.dataValues,
          accessToken,
        })
      );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR
          )
        );
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ["id", "username"],
        where: { isDeleted: false },
      });
      if (!users) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(
            util.fail(
              statusCode.BAD_REQUEST,
              responseMessage.GET_ALL_USERS_FAIL
            )
          );
      }
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.GET_ALL_USERS_SUCCESS,
            users
          )
        );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR
          )
        );
    }
  },

  // TODO: user verification
  getOneUser: async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await User.findOne({
        where: { id: userId, isDeleted: false },
        attributes: ["id", "username"],
        include: [
          {
            model: Room,
            as: "JoinedRooms",
            attributes: [
              "id",
              "roomName",
              "isMatchingDone",
              "expiration",
              "createdAt",
            ],
            through: { attributes: [] },
          },
        ],
      });
      if (!user) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.GET_ONE_USER_FAIL)
          );
      }
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.GET_ONE_USER_SUCCESS,
            user
          )
        );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR
          )
        );
    }
  },
  updateUser: async (req, res) => {
    const { userId } = req.params;
    const { username } = req.body;
    if (!username) {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      if (+userId !== +req.user.id)
        return res
          .status(statusCode.FORBIDDEN)
          .send(
            util.fail(statusCode.FORBIDDEN, responseMessage.NOT_AUTHORIZED)
          );
      const user = await User.findOne({
        where: { id: userId, isDeleted: false },
      });
      if (!user)
        return res
          .status(statusCode.NOT_FOUND)
          .send(
            util.fail(statusCode.NOT_FOUND, responseMessage.UPDATE_USER_FAIL)
          );
      user.username = username || user.username;
      await user.save();
      res
        .status(statusCode.OK)
        .send(
          util.success(statusCode.OK, responseMessage.UPDATE_USER_SUCCESS, user)
        );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR
          )
        );
    }
  },
  deleteUser: async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findOne({ where: { id: userId } });
      user.isDeleted = true;
      await user.save();
      res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, responseMessage.DELETE_USER_SUCCESS));
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR
          )
        );
    }
  },
  checkSerial: async (req, res) => {
    const { serialNumber } = req.params;
    if (!serialNumber) {
      return res
        .status(statusCode.BAD_REQUREST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const user = await User.findOne({
        where: { serialNumber, isDeleted: false },
        attributes: ["id", "username", "serialNumber"],
      });
      // console.log(user);
      if (!user) {
        return res.status(statusCode.OK).send(
          util.success(statusCode.OK, responseMessage.NO_SUCH_SERIAL_NUMBER, {
            serialNumber,
          })
        );
      }
      const { accessToken } = await jwt.sign(user);
      res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.SERIAL_NUMBER_EXISTS, {
          user,
          accessToken,
        })
      );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR
          )
        );
    }
  },
};
