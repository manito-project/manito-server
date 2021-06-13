const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const userRouter = express.Router();

// Check if a serial number is registered
userRouter.get("/check-serial/:serialNumber", userController.checkSerial);

// Create a user
userRouter.post("/", userController.signin);

// Read all users
userRouter.get("/", userController.getAllUsers);

// Read a user by ID
userRouter.get("/:userId", userController.getOneUser);

// Update a user
userRouter.put("/:userId", authMiddleware.checkToken, userController.updateUser);

// Delete a user
userRouter.delete("/:userId", authMiddleware.checkToken, userController.deleteUser);

module.exports = userRouter;
