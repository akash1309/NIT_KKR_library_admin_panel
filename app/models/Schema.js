const mysql = require('mysql');

const LoginsSchema = mysql.Schema({
  name:         { type: String, required: true  },
  password:     { type: String, required: true  }
},
{ collection: 'Logins' },
{
  timestamps: true
});

const CourseSchema = mysql.Schema({
  branch:       { type:String , required:true },
  course_name:  { type: String, required:true },
  author:       { type: String, required:true },
  code:         { type: String, required:true }
},
{
  collection: 'Course'
},
{
  timestamps: true
});

var Logins = mysql.model('Logins', LoginsSchema);
var Course = mysql.model('Course',CourseSchema);

module.exports = {
  Logins:Logins,
  Course:Course,
};
