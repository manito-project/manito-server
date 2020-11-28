
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Member",
    {
      UserId: {
        type: DataTypes.INTEGER,
        reference: {
          model: userModel,
          key: "id",
        },
      },
      RoomId: {
        type: DataTypes.INTEGER,
        reference: {
          model: roomModel,
          key: "id",
        },
      },
    },
    { freezeTableName: true, timestamps: true },
  );
};
