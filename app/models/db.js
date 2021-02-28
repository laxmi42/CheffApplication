const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({

  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  db: dbConfig.DB,

});
console.log(connection);
if (!connection) {
console.log("Connection failed: " +connection);
}
console.log("connectied sucessfullt");





console.log("Connected");
module.exports = connection;
