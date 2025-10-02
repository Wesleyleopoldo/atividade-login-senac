const { DataTypes, sequelize } = require("../resources/sequelize");

const User = sequelize.define("User", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    login: {
        unique: true,
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
});

module.exports = User;