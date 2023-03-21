const Datatypes = require("sequelize");
const db = require("../database/db.js");
// const {
//     Category
// } = require("../models/category");

const Performance = db.define("performance2", {
    performance_id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,

    },
    performance_name: {
        type: Datatypes.STRING
    },
    performance_sculptute: {
        type: Datatypes.STRING
    },
    performance_location: {
        type: Datatypes.STRING
    },
    performance_image: {
        type: Datatypes.STRING
    },
    performance_type: {
        type: Datatypes.STRING
    },
    performance_size: {
        type: Datatypes.STRING
    },
    category_id: {
        type: Datatypes.INTEGER,
        primary: true,
    },

}, {
    freezeTableName: true,
    timestamps: false
})

// Performance.hasOne(Category);


module.exports = Performance;