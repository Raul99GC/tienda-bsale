const Products = require('./products.model');
const Categories = require('./categories.model')

const initModels = () => {

    // ! Products 1 : n Categories
    Categories.hasMany(Products)
    Products.belongsTo(Categories)

};

module.exports =  initModels ;