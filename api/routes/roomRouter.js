const express = require("express");
const roomController = require("../controllers/roomController");
const roomRouter = express.Router();

// Create a room
roomRouter.post("/", roomController.createRoom);

// Read all rooms
roomRouter.get("/", roomController.getAllRooms);

// Enter a room
roomRouter.post("/enter", roomController.enterRoom);

// Create pairs
roomRouter.post("/match", roomController.matchPairs);

// Read a room by ID
roomRouter.get("/:roomId", roomController.getOneRoom);

// Update a room
roomRouter.put("/");

// Delete a room
roomRouter.delete("/:roomId", roomController.deleteRoom);

module.exports = roomRouter;
