const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

// Create a user
userRouter.post("/", userController.signin);

// Read all users
userRouter.get("/", userController.getAllUsers);

// Check if a serial number is registered
userRouter.get("/check-serial/:serialNumber", userController.checkSerial);

// Read a user by ID
userRouter.get("/:userId", userController.getOneUser);

// Delete a user
userRouter.delete("/:userId", userController.deleteUser);

module.exports = userRouter;
