const { Mission } = require(".");
const Room = require("./Room");
const User = require("./User");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "User_Room",
    {
      UserId: {
        type: DataTypes.INTEGER,
        reference: {
          model: User,
          key: "id",
        },
      },
      RoomId: {
        type: DataTypes.INTEGER,
        reference: {
          model: Room,
          key: "id",
        },
      },
      // MissionId: {
      //   type: DataTypes.INTEGER,
      //   reference: {
      //     model: Mission,
      //     key: "id",
      //   },
      // },
    },
    { freezeTableName: true, timestamps: true },
  );
};
