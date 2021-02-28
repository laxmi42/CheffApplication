const mysql = require("mysqli");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createConnection({

  host: dbConfig.database.HOST,
  port: dbConfig.database.PORT,
  database: dbConfig.database.DB,
  user: dbConfig.database.USER,
  password: dbConfig.database.PASSWORD,


});









connection.query('SELECT * FROM categories', function (error, results, fields) {
  if (error)
      throw error;

  results.forEach(result => {
      console.log(result);
  });
});











if (!connection) {
console.log("Connection failed: " +connection);
}
console.log("connectied sucessfullt");





console.log("Connected");
module.exports = connection;
