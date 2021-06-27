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
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      isMatchingDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDeletedByCreator: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { freezeTableName: true, timestamps: true }
  );
};
