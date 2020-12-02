const { Room, User_Room, Mission } = require("../models");
const responseMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");
const generateCode = require("../services/generateCode");

// TODO: user authentication
// TODO: get user(creator) and add it to the room
module.exports = {
  createRoom: async (req, res) => {
    const { roomName, expiration } = req.body;
    const invitationCode = generateCode();
    const { missionContents } = req.body;
    try {
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
        // attributes: ["id", "roomName", "expiration", "invitationCode"],
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
            model: Mission,
            attributes: ["id", "content", "roomId"],
          },
          {
            model: User,
            as: "Member",
            attributes: ["id", "nickname"],
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
    const { userId } = req.body;

    try {
      const room = await Room.findOne({
        where: { invitationCode },
        attributes: ["roomName", "expiration", "invitationCode"],
      });
      if (!room) {
        return res
          .status(statusCode.NOT_FOUND)
          .send(util.fail(statusCode.NOT_FOUND, responseMessage.INVALID_CODE));
      }
      const RoomId = room.id;
      const UserId = "2";
      console.log(room);
      const newMember = await User_Room.create({ RoomId, UserId });
      res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.ROOM_ENTER_SUCCESS, {
          room,
          newMember,
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
};
