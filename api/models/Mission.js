module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Mission",
    {
      content: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: true },
  );
};
