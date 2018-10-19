var mysql = require('mysql');

var con = mysql.createConnection({
  host: "8080",
  user: "root",
  password: "goyalanshu"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
