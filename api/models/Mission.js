module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Mission",
    {
      content: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { freezeTableName: true, timestamps: true }
  );
};
