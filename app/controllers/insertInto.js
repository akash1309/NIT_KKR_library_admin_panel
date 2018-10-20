var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "goyalanshu",
  database: "NIT_KKR"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM sample", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
