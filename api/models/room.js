module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Room",
    {
      roomName: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      expiration: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      // roomImageUrl: {
      //   type: DataTypes.STRING(400),
      //   allowNull: true,
      // },
    },
    { freezeTableName: true, timestamps: true },
  );
};
