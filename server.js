const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const mysql = require('mysql');

var cors = require('cors')
const app = express();
app.use(cors())
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route











app.get("/getdata", (req, res) => {

  var mysql = require('mysql');
  var c = mysql.createConnection({
    url:"http://vijaydeliveryservices.com",
    host:"127.0.0.1",
    port:"3306",
    database: "u271274439_cheffapp",
    debug:true,
    user: "u271274439_cheffapp",
    password: "Admin@123",
  
  });

  sql.query("SELECT *  FROM categories ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/customer.routes.js")(app);
require("./app/routes/cheff-user.routes.js")(app);
require("./app/routes/add-menu.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
