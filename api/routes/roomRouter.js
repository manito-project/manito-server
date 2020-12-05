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

// Create pairs
roomRouter.post("/match", authMiddleware.checkToken, roomController.matchPairs);

// Show my relations
roomRouter.get(
  "/:roomId/my",
  authMiddleware.checkToken,
  roomController.getMyRelations,
);

// Read a room by ID
roomRouter.get("/:roomId", roomController.getOneRoom);

// Delete a room
roomRouter.delete("/:roomId", roomController.deleteRoom);

module.exports = roomRouter;
