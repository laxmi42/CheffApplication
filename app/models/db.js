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







connection.connect(function(err) {
  if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
  }

  console.log('Connected as id ' + connection.threadId);
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
