var mysql   = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "goyalanshu",
  database: "NIT_KKR"
});

module.exports = db;
