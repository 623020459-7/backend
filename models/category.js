const Datatypes = require("sequelize");
const db = require("../database/db.js");
// const Category = require("../models/category.js");

const Category = db.define("category", {
    category_id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    category_name: {
        type: Datatypes.STRING
    },

}, {
    freezeTableName: true,
    timestamps: false
})

// Category.belongsTo(Performance, {
//     foreignKey: {
//         name: 'category_id'
//     }
// });


module.exports = Category;