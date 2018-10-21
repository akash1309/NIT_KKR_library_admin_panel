var db = require('./../dbconnection');

var courses = {

  getCourses : function(req, res){
    var sql = "select * from course order_by;";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching Data!",
          "error" : err
        });
      }
      if(user.length == 0){
              return res.status(404).send({
                  "message": "No Data found"
              });
          }
      else res.status(200).send(user);
    });
  },

  findByCourseCode : function(req, res){
    var sql = "select * from course where code = '"+ req.params.code +"';";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching Data!",
          "error" : err
        });
      }
      if(user.length == 0){
              return res.status(404).send({
                  "message": "No Data found"
              });
          }
      else res.status(200).send(user);
    });
  },

  findByCourseName : function(req, res){
    var sql = "select * from course where course_name = '" + req.params.name + "';";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching Data!",
          "error" : err
        });
      }
      if(user.length == 0){
              return res.status(404).send({
                  "message": "No Data found"
              });
          }
      else res.status(200).send(user);
    });
  },

  findByCourseAuthor : function(req, res){
    var sql = "select * from course where author = "+ req.params.author +" order_by;";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error fetching Data!",
          "error" : err
        });
      }
      if(user.length == 0){
              return res.status(404).send({
                  "message": "No Data found"
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

  deleteByCourseCode : function(req, res){
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

  addCourse : function(req, res){
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
