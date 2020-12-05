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

// Read a room by ID
roomRouter.get("/:roomId", roomController.getOneRoom);

// Update a room
// roomRouter.put("/");

// Delete a room
roomRouter.delete("/:roomId", roomController.deleteRoom);

module.exports = roomRouter;
