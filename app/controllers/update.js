var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "goyalanshu",
  database: "NIT_KKR"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE sample SET name = 'Canyon' WHERE id = '2'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
