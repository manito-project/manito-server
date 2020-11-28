module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "User",
    {
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      freezeTalbeName: true,
      timestamps: true,
    },
  );
};
