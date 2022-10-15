const {DataTypes} = require('sequelize');
const {db} = require('../utils/database');

const Categories = db.define('categories', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    }
});

module.exports = Categories;