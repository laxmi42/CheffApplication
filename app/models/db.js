const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  url: dbConfig.URL,
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  db: dbConfig.DB,

});
connection.connect();
console.log("Connected");
module.exports = connection;
