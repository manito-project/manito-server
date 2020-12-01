const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

// Create a user
userRouter.post("/", userController.signin);

// Read all users
userRouter.get("/", userController.getAllUsers);

// Read a user by ID
userRouter.get("/:userId", userController.getOneUser);

// Update a user
userRouter.put("/:userId");

// Delete a user
userRouter.delete("/:userId", userController.deleteUser);

module.exports = userRouter;
