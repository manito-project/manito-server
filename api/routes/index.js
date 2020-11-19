var express = require("express");
var router = express.Router();

// Users Router
router.get("/users", require("./userRouter"));

// Rooms Router
router.get("/rooms", require("./roomRouter"));

module.exports = router;
