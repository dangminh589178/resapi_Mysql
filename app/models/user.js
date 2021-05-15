const {Sequelize} = require('sequelize');
const sequelize = require('./database');


// Import sequelize object, 
// Database connection pool managed by Sequelize.

const User = sequelize.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    //username
    username: { type:Sequelize.STRING, allowNull:true },
    //password
    password: { type:Sequelize.STRING, allowNull:true },
    //token
    token: { type:Sequelize.STRING, allowNull:true },
    //expiration
    expiration: { type:Sequelize.DATE, allowNull:true },
    //createdAt
    createdAt: { type:Sequelize.DATE, allowNull:false },
    //updatedAt
    updatedAt: { type:Sequelize.DATE, allowNull:true },

})   
module.exports = User