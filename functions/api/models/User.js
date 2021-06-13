module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      serialNumber: {
        type: DataTypes.STRING(400),
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
};
