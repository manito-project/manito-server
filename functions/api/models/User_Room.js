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
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDeletedFromHistory: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { freezeTableName: true, timestamps: true }
  );
};
