var express = require("express");
var router = express.Router();

// Users Router
router.get("/users", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Teams Router

module.exports = router;
