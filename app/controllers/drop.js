var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "goyalanshu",
  database: "NIT_KKR"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE IF EXISTS sample";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
