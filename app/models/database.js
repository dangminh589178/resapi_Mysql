const  mysql = require('mysql');
const dbConfig = require('../config/db.config.js');
const { Sequelize } = require('sequelize');

const db = new Sequelize('qr_database', 'root', '', {
    host: 'localhost',
    dialect:  'mysql'
  });

  try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:',error );
  }
// //create connetion database mysql
// const connection = mysql.createConnection({
//     host: dbConfig.host,
//     user: dbConfig.user,
//     password: dbConfig.password,
//     database: dbConfig.database
// });
// //open connection mysql
// connection.connect(error=>{
//     if(error) throw error;
//     console.log('Connect success');
// });
module.exports = db;