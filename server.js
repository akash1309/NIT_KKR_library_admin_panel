var mysql   = require('mysql');
var express = require('express');
var app     = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "goyalanshu",
  database: "NIT_KKR"
});

con.connect(function(err) {
  if (err){
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log("Connected!");
});

app.listen(8080);
