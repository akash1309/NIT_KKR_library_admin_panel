var db = require('./../dbconnection');

module.exports = function(req, res){
  var loginsSql = "CREATE TABLE if not exists logins (name VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL);";
  var courseSql = "CREATE TABLE if not exists course (Course_ID VARCHAR(255)  NOT NULL, Discipline_Name VARCHAR(255) NOT NULL,Course_Name VARCHAR(255) NOT NULL,Professor_Name Varchar(255) NOT NULL,Phase Varchar(30) NOT NULL);";

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
