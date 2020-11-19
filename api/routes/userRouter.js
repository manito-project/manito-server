const express = require("express");
const userRouter = express.Router();

// Create a user
userRouter.post("/");

// Read all users
userRouter.get("/");

// Read a user by ID
userRouter.get("/:userId");

// Update a user
userRouter.put("/:userId");

// Delete a user
userRouter.delete("/:userId");

module.exports = userRouter;
