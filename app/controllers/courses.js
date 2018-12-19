var db = require('./../dbconnection');
var dir = require('node-dir');
//const testFolder = '/Volumes/MacOS/new/';
const testFolder = '/Users/loanframe/CodingStuff/NIT_KKR_library_admin_panel/WebPortal/Videos';

var courses = {

  getCourses : function(req, res){
    var sql = "select * from course ORDER BY Course_Name;";
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

  getAllDiscipline : function(req, res){
    var sql = "select * from course ORDER BY Discipline_Name;";
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

  getAllCourse : function(req, res){
    var sql = "select Course_Name from course ORDER BY Course_Name;";
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

  getAllProfessor : function(req, res){
    var sql = "select Professor_Name from course ORDER BY Professor_Name;";
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
    var sql = "select * from course where Course_ID = '"+ req.params.course_id +"';";
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

  findByDisciplineName : function(req, res){
    var sql = "select * from course where Discipline_Name = '" + req.params.discipline_name + "';";
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
    var sql = "select * from course where Professor_Name = '"+ req.params.professor_name +"';";
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

  findLink : function(req, res){
    var sql = "select Course_ID , Phase from course where Professor_Name = '"+ req.params.professor_name +"' AND Course_Name = '"+ req.params.course_name +"';";
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
      else res.status(200).send(user[0]);
    });
  },

  findByCourseName : function(req, res){
    var sql = "select * from course where Course_Name = '"+ req.params.course_name +"' ORDER BY Professor_Name;";
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
    var sql = "delete from course where Course_ID ='" + req.params.course_id +"';";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error deleting Data!",
          "error" : err
        });
      }
      else res.status(200).send("Data Successfully Deleted");
    });
  },

  addCourse : function(req, res){
    var sql = "insert into course values('" + req.body.course_id + "','" + req.body.discipline_name + "','" + req.body.course_name + "','" + req.body.professor_name + "','" + req.body.phase + "');";
    db.query(sql, function (err, user) {
      if (err) {
        return res.status(500).send({
          "message" : "Error Inserting Data!",
          "error" : err
        });
      }
      else res.status(200).send("Data Successfully Added.");
    });
  },

  listFilesInFolder: function(req, res){
      var link=testFolder
       //var id=req.params.course_id
       //console.log(id);
       //link= link + id
       var files = dir.files(link , {sync:true});
       if(files.length !=0){
         return res.status(200).send({files});
        }
       else {
         return res.status(500).send({
           "message" : "No data found"
         });
        }
    //  console.log(files);

  }


}

module.exports = courses;
