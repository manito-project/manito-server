module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Room",
    {
      roomName: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      expiration: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      invitationCode: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
      },
      // missions: {},

      // roomImageUrl: {
      //   type: DataTypes.STRING(400),
      //   allowNull: true,
      // },
    },
    { freezeTableName: true, timestamps: true },
  );
};
