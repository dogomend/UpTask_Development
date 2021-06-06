const Sequelize = require('sequelize');
//Importar las variables
require('dotenv').config({path: 'variables.env'});

const db = new Sequelize(
  //'uptasknode', 'root', 'rootroot', {
  //host: '127.0.0.1',
  //dialect: 'mysql',
  //port: '3306',
  //operatorsAliases: false,
  process.env.BD_NOMBRE,
  process.env.BD_USER,
  process.env.BD_PASS,
  {
    host: process.env.BD_HOST,
    dialect: 'mysql',
    port: process.env.BD_PORT,
  
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

module.exports = db;