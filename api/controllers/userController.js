const { User, Room, User_Room } = require("../models");
const jwt = require("../modules/jwt");
const responseMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");

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
      res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.CREATE_USER_SUCCESS, {
          ...user.dataValues,
          accessToken,
        }),
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

  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ["id", "username"],
      });
      if (!users) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(
            util.fail(
              statusCode.BAD_REQUEST,
              responseMessage.GET_ALL_USERS_FAIL,
            ),
          );
      }
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.GET_ALL_USERS_SUCCESS,
            users,
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
  getOneUser: async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await User.findOne({
        where: { id: userId },
        attributes: ["id", "username"],
        include: [
          {
            model: Room,
            as: "JoinedRooms",
            attributes: ["id", "roomName", "expiration"],
            through: { attributes: [] },
          },
        ],
      });
      if (!user) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(
            util.fail(
              statusCode.BAD_REQUEST,
              responseMessage.GET_ONE_USER_FAIL,
            ),
          );
      }
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.GET_ONE_USER_SUCCESS,
            user,
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
  deleteUser: async (req, res) => {
    const { userId } = req.params;
    try {
      const deletedUser = await User.destroy({
        where: { id: userId },
        attributes: ["id", "username", "serialNumber"],
      });
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.DELETE_USER_SUCCESS,
            deletedUser,
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
