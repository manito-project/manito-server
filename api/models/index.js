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
db.User = require("./user")(sequelize, Sequelize);
db.Room = require("./room")(sequelize, Sequelize);
db.Member = require("./member")(sequelize, Sequelize);

db.User.hasMany(db.Room, { onDelete: "cascade" });
db.Room.belongsTo(db.User);

db.User.belongsToMany(db.Room, { through: "Member", as: "member" });
