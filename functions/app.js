const functions = require("firebase-functions");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const { sequelize } = require("./api/models");

var indexRouter = require("./api/routes/index");

sequelize
  // .sync({ alter: true, force: false })
  .sync({ alter: false })
  .then(() => {
    console.log("✅ Connected to the database!");
  })
  .catch((error) => {
    console.log(error);
  });

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/manitto/v1", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = functions
  .runWith({
    timeoutSeconds: 300,
    memory: "512MB",
  })
  .region("asia-northeast2")
  .https.onRequest(async (req, res) => {
    if (process.env.NODE_ENV === "development") {
      console.log("\n\n", "[api]", req.method, req.originalUrl, req.headers.currentbuildno, req.headers.timezone, req.body);
    } else {
      console.log("[api]", req.method, req.originalUrl, req.headers.currentbuildno, req.headers.timezone, req.body);
    }
    return app(req, res);
  });
