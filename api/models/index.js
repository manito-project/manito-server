const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require("./User")(sequelize, Sequelize);
db.Room = require("./Room")(sequelize, Sequelize);
db.User_Room = require("./User_Room")(sequelize, Sequelize);
db.Mission = require("./Mission")(sequelize, Sequelize);

// 1 : N    User : Room
db.User.hasMany(db.Room, {
  onDelete: "cascade",
  foreignKey: "creatorId",
});
db.Room.belongsTo(db.User, { foreignKey: "creatorId", as: "Creator" });

// N : M    Member : Room
db.User.belongsToMany(db.Room, { through: "User_Room", as: "JoinedRooms" });
db.Room.belongsToMany(db.User, { through: "User_Room", as: "Members" });

// 1 : N    Room : Mission
db.Room.hasMany(db.Mission, { onDelete: "cascade", foreignKey: "roomId" });
db.Mission.belongsTo(db.Room, { foreignKey: "roomId" });

// 1 : 1    Santa : Manitto
db.User_Room.hasOne(db.User_Room, { as: "Santa", foreignKey: "SantaUserId" });
db.User_Room.hasOne(db.User_Room, {
  as: "Manitto",
  foreignKey: "ManittoUserId",
});

// User_Room & Mission
db.User_Room.hasOne(db.Mission, { as: "RoomMission" });
db.Mission.belongsTo(db.User_Room);

module.exports = db;
