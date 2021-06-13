const express = require("express");
const roomController = require("../controllers/roomController");
const roomRouter = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

// Create a room
roomRouter.post("/", authMiddleware.checkToken, roomController.createRoom);

// Read all rooms
roomRouter.get("/", roomController.getAllRooms);

// Enter a room
roomRouter.post("/enter", authMiddleware.checkToken, roomController.enterRoom);

// Exit a room
roomRouter.post("/exit", authMiddleware.checkToken, roomController.exitRoom);

// Create pairs
roomRouter.post("/match", authMiddleware.checkToken, roomController.matchPairs);

// Show my relations
roomRouter.get("/:roomId/my", authMiddleware.checkToken, roomController.getMyRelations);

// Delete User_Room from history
roomRouter.delete("/:roomId/history", authMiddleware.checkToken, roomController.deleteUserRoomFromHistory);

// Read a room by ID
roomRouter.get("/:roomId", roomController.getOneRoom);

// Update room name or expiration date. Only creator.
roomRouter.put("/:roomId", authMiddleware.checkToken, roomController.updateOneRoom);

// Delete a room
roomRouter.delete("/:roomId", authMiddleware.checkToken, roomController.deleteRoom);

module.exports = roomRouter;
