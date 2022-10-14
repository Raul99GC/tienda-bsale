const { Sequelize } = require('sequelize');
const config = require('../config');

const db = new Sequelize(config.DB, config.BD_USER, config.DB_PASSWORD, {
  host: config.HOST,
  dialect: 'mysql',
  logging: false,
});



module.exports = {
  db
}