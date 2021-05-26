const { User, Room, User_Room, Mission } = require("../models");
const jwt = require("../modules/jwt");
const responseMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");
const generateCode = require("../services/generateCode");
const slackAPI = require("../middlewares/slackAPI");

module.exports = {
  signin: async (req, res) => {
    const { username, serialNumber } = req.body;

    if (!username || !serialNumber) {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const alreadyUser = await User.findOne({ where: { serialNumber, isDeleted: false } });
      if (alreadyUser) {
        const CONTEXT = `[SIGN_IN] (username: ${username}, serialNumber: ${serialNumber})`;
        const responseMsg = responseMessage.ALREADY_USER;
        const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl}  
        ${JSON.stringify(responseMsg)}`;
        slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
        return res.status(statusCode.CONFLICT).send(util.fail(statusCode.CONFLICT, responseMessage.ALREADY_USER));
      }
      const user = await User.create({ username, serialNumber });

      const { accessToken } = await jwt.sign(user);
      res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.CREATE_USER_SUCCESS, {
          ...user.dataValues,
          accessToken,
        })
      );
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[SIGN_IN] (username: ${username}, serialNumber: ${serialNumber})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} 
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ["id", "username"],
        where: { isDeleted: false },
      });
      if (!users) {
        const CONTEXT = `[GET_ALL_USERS]`;
        const responseMsg = responseMessage.GET_ALL_USERS_FAIL;
        const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} 
        ${JSON.stringify(responseMsg)}`;
        slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.GET_ALL_USERS_FAIL));
      }
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.GET_ALL_USERS_SUCCESS, users));
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[GET_ALL_USERS]`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl}  
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
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
            attributes: ["id", "roomName", "isMatchingDone", "expiration", "createdAt"],
            where: { isDeleted: false },
            required: false,
            through: { attributes: [] },
          },
        ],
      });
      if (!user) {
        const CONTEXT = `[GET_ONE_USER] (uid: ${userId})`;
        const responseMsg = responseMessage.GET_ONE_USER_FAIL;
        const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl}\n${JSON.stringify(responseMsg)}`;
        slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.GET_ONE_USER_FAIL));
      }
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.GET_ONE_USER_SUCCESS, user));
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[GET_ONE_USER] (uid: ${userId})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} 
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
  updateUser: async (req, res) => {
    const { userId } = req.params;
    const { username } = req.body;
    if (!username) {
      const CONTEXT = `[UPDATE_USER_NULL_VALUE]`;
      const responseMsg = responseMessage.NULL_VALUE;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
      ${JSON.stringify(responseMsg)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      if (+userId !== +req.user.id) {
        const CONTEXT = `[UPDATE_USER_FORBIDDEN] (req.user.id: ${req.user.id} userId: ${userId})`;
        const responseMsg = responseMessage.NOT_AUTHORIZED;
        const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
        ${JSON.stringify(responseMsg)}`;
        slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
        return res.status(statusCode.FORBIDDEN).send(util.fail(statusCode.FORBIDDEN, responseMessage.NOT_AUTHORIZED));
      }
      const user = await User.findOne({
        where: { id: userId, isDeleted: false },
      });
      if (!user) {
        const CONTEXT = `[UPDATE_USER_NO_USER] (uid: ${userId})`;
        const responseMsg = responseMessage.UPDATE_USER_FAIL;
        const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
        ${JSON.stringify(responseMsg)}`;
        slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
        return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.UPDATE_USER_FAIL));
      }
      user.username = username || user.username;
      await user.save();
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.UPDATE_USER_SUCCESS, user));
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[UPDATE_USER] (uid: ${userId}, username: ${username})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
  deleteUser: async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await User.findOne({ where: { id: userId } });
      user.isDeleted = true;
      await user.save();
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.DELETE_USER_SUCCESS));
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[DELETE_USER] (uid: ${userId})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl}
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
  checkSerial: async (req, res) => {
    const { serialNumber } = req.params;
    if (!serialNumber) {
      const CONTEXT = `[CHECK_SERIAL_NULL_VALUE]`;
      const responseMsg = responseMessage.NULL_VALUE;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} uname:${req.user.username} uid:${req.user.id} 
      ${JSON.stringify(responseMsg)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const user = await User.findOne({
        where: { serialNumber, isDeleted: false },
        attributes: ["id", "username", "serialNumber"],
      });
      // console.log(user);
      if (!user) {
        const CONTEXT = `[CHECK_SERIAL] (serialNumber: ${serialNumber})`;
        const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} 
        ${JSON.stringify(responseMessage.NO_SUCH_SERIAL_NUMBER)}`;
        slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
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
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const CONTEXT = `[CHECK_SERIAL] (serialNumber: ${serialNumber})`;
      const slackMessage = `[ERROR] [${req.method.toUpperCase()}] ${CONTEXT || ""} ${req.originalUrl} 
      ${JSON.stringify(error)}`;
      slackAPI.sendMessageToSlack(slackMessage, slackAPI.SLACK_WEB_HOOK_ERROR);
    }
  },
};
