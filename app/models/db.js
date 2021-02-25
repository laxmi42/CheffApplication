const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  url: dbConfig.URL,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  db: dbConfig.DB,
});

module.exports = connection;
