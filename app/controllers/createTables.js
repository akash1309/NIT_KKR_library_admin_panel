var db = require('./../dbconnection');

module.exports = function(req, res){
  var loginsSql = "CREATE TABLE if not exists logins (name VARCHAR(255), password VARCHAR(255));";
  var courseSql = "CREATE TABLE if not exists course (name VARCHAR(255), course_name VARCHAR(255), author VARCHAR(255), code VARCHAR(255) primary key);";

  db.query(loginsSql, function (err, result) {
    if (err)
    console.log("Error in tables creation", err);
    else console.log("Logins Created");
  });
  db.query(courseSql, function (err, result) {
    if (err)
    console.log("Error in tables creation", err);
    else console.log("Course Created");
  });
  res.send("Tables Created.");
}
