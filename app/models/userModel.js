
//Khoi tao model users
const sequelize = require('./database.js');
const User = require('./user.js');

sequelize.sync()
sequelize.sync({force:true})


