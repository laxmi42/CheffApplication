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
    DB_HOST:"31.170.160.103",
    DB_PORT:"3306",
    DB_NAME: "u271274439_cheffapp",
    debug:true,
    DB_USER: "u271274439_cheffapp",
    DB_PASS: "Admin@123",
  
  });

  c.query("SELECT *  FROM categories ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      
      return;
    }
console.log(res);
   
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
