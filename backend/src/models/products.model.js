const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');
const Categories = require('./categories.model');

const Products = db.define('products', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url_image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Categories,
            key: 'id'
        }
    }
});

module.exports = Products;