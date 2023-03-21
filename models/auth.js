const Datatypes = require("sequelize");
const db = require("../database/db.js");

const User = db.define("user", {
    user_id: {
        type: Datatypes.INTEGER,
        primary: true,
    },
    user_name: {
        type: Datatypes.STRING
    },
    user_password: {
        type: Datatypes.STRING
    }

}, {
    freezeTableName: true
})

module.exports = User;