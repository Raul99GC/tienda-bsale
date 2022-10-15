const { db } = require('../utils/database');
const { QueryTypes } = require('sequelize');

const getAllCategories = async () => {
    const data = await db.query(`SELECT * FROM category`,  { type: QueryTypes.SELECT });
    return data
}

const getCategoryById = async (categoryId) => {
    const data = await db.query(`SELECT * FROM category WHERE id LIKE ${categoryId}`, { type: QueryTypes.SELECT });
    return data;
}




module.exports = {
    getAllCategories,
    getCategoryById
}