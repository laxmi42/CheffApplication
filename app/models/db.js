const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  url:dbConfig.database.URL,
  host: dbConfig.database.HOST,
  port: dbConfig.database.PORT,
  user: dbConfig.database.USER,
  password: dbConfig.database.PASSWORD,
  db: dbConfig.database.DB,

});
console.log(connection);








connection.query('SELECT * FROM u271274439_cheffapp.categories', function (error, results, fields) {
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
