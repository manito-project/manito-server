var express = require("express");
var indexRouter = express.Router();

// Users Router
indexRouter.use("/users", require("./userRouter"));

// Rooms Router
indexRouter.use("/rooms", require("./roomRouter"));

module.exports = indexRouter;
