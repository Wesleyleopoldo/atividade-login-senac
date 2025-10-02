const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./user_login.sql",
    logging: false
});

module.exports = { Sequelize, DataTypes, sequelize };