const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({

  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  db: dbConfig.DB,

});

console.log("Connected");
module.exports = connection;
