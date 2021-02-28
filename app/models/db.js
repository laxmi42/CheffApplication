const mysql = require("mysqli");
const dbConfig = require("../config/db.config.js");

var connection = mysqli_connect({
  url: dbConfig.URL,
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  db: dbConfig.DB,
});

module.exports = connection;
