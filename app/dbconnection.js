var mysql   = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lfpass123",
  database: "NIT_KKR"
});

module.exports = db;
