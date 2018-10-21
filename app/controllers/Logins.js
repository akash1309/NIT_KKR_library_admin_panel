var db = require('./../dbconnection');

var Logins = {

  getUsers : function(req, res){
    var sql = "select * from logins where name ='" + req.params.name + "' AND password = '" + req.params.password + "';";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching User!",
          "error" : err
        });
      }
      else res.status(200).send(user);
    });
  },

  addUser : function(req, res){
    var sql = "insert into logins values('" + req.body.name + "','" + req.body.password + "');";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching User!",
          "error" : err
        });
      }
      else res.status(200).send("User Successfully Added.");
    });
  }


}

module.exports = Logins;
