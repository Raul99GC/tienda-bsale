const dotenv = require('dotenv').config();

module.exports = {

  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.DB_HOST || 'localhost',
  PORT: process.env.PORT || 3306,
  BD_USER: process.env.BD_USER,
  DB_PASSWORD: process.env.DB_PASSWORD ,
  DB: process.env.DB

}