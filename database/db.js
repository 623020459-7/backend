const Sequelize = require("sequelize");

const db = new Sequelize("project", "root", "admin", {
    host: "localhost",
    dialect: "mysql",
});


module.exports = db;