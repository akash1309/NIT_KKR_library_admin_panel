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
      if(user.length == 0){
              return res.status(404).send({
                  "message": "No User found"
              });
          }
      else res.status(200).send(user);
    });
  },

  getAdmin : function(req, res){
    var sql = "select * from logins;";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching User!",
          "error" : err
        });
      }
      if(user.length == 0){
              return res.status(404).send({
                  "message": "No User found"
              });
          }
      else res.status(200).send(user[0]);
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
