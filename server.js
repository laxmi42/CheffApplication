const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const mysql = require('mysql');

var cors = require('cors')
const app = express();
app.use(cors())
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route

const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100'
];



// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  }
}

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));

app.get('/', cors(corsOptions), (req, res, next) => {
  res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
})







app.get("/getdata", (req, res) => {

  var mysql = require('mysql');
  var c = mysql.createConnection({
    
    host:"31.170.160.103",
 
    database: "u271274439_cheffapp",
  
    user: "u271274439_cheffapp",
    password: "Admin@123",
  
  });
console.log(c);
  c.query("SELECT *  FROM categories ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      
      return;
    }
console.log(res);
   
  });
  res.json(res);
});

require("./app/routes/customer.routes.js")(app);
require("./app/routes/cheff-user.routes.js")(app);
require("./app/routes/add-menu.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
