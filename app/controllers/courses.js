var db = require('./../dbconnection');

var courses = {

  getAllRows : function(req, res){
    var sql = "select * from course order_by;";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching Data!",
          "error" : err
        });
      }
      else res.status(200).send(user);
    });
  },

  wherecode : function(req, res){
    var sql = "select * from course where code = "+ req.params.code +" order_by;";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching Data!",
          "error" : err
        });
      }
      else res.status(200).send(user);
    });
  },

  wherecourse_name : function(req, res){
    var sql = "select * from course where course_name = "+ req.params.course_name +" order_by;";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching Data!",
          "error" : err
        });
      }
      else res.status(200).send(user);
    });
  },

  whereauthor : function(req, res){
    var sql = "select * from course where author = "+ req.params.author +" order_by;";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching Data!",
          "error" : err
        });
      }
      else res.status(200).send(user);
    });
  },

  drop : function(req, res){
    var sql = "drop table IF exists course;";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching Data!",
          "error" : err
        });
      }
      else res.status(200).send(user);
    });
  },

  delete : function(req, res){
    var sql = "delete from course where code=" + req.params.code +";";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching Data!",
          "error" : err
        });
      }
      else res.status(200).send(user);
    });
  },

  addRow : function(req, res){
    var sql = "insert into course values('" + req.body.name + "','" + req.body.course_name + "','" + req.body.author + "','" + req.body.code + "');";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error Inserting Data!",
          "error" : err
        });
      }
      else res.status(200).send("Data Successfully Added.");
    });
  }


}

module.exports = courses;
