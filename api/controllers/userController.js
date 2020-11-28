const { User } = require("../models");
const responseMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");

module.exports = {
  signin: async (req, res) => {
    const { nickname, serialNumber } = req.body;

    try {
      const user = await User.create({ nickname, serialNumber });
      console.log(user);
      res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, responseMessage.CREATED_USER, user));
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR,
          ),
        );
    }
  },
};
