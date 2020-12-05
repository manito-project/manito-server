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
      invitationCode: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
      },
    },
    { freezeTableName: true, timestamps: true },
  );
};
