const express = require("express");
const roomRouter = express.Router();

// Create a room
roomRouter.post("/");

// Read all rooms
roomRouter.get("/");

// Read a room by ID
roomRouter.get("/:roomId");

// Update a room
roomRouter.put("/");

// Delete a room
roomRouter.delete("/");

module.exports = roomRouter;
