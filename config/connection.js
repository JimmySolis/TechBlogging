//   Here I set up my sequelize to allow me to transfer my data.
//   dotenv will hold my secrets and keep them private.
const Sequelize = require('sequelize');
require('dotenv').config();


//   This will establish that all the needed properites to establish a connection.
const sequelize = new Sequelize(process.env.JAWSDB_URL || process.env.MYSQLURI);


module.exports = sequelize;