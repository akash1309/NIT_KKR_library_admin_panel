const createTables = require("./../controllers/createTables");
const logins       = require("./../controllers/Logins");
const courses      = require("./../controllers/courses");

module.exports = function(app) {
  app.get('/', createTables);
  app.get('/users/:name/password/:password', logins.getUsers);
  app.get('/admin',logins.getAdmin);
  app.post('/user', logins.addUser);
  app.get('/courses',courses.getCourses);
  app.post('/course', courses.addCourse);
  app.get('/course/code/:course_id',courses.findByCourseCode);
  app.get('/discipline/name/:discipline_name',courses.findByDisciplineName);
  app.get('/course/name/:course_name',courses.findByCourseName);
  app.get('/course/author/:professor_name',courses.findByCourseAuthor);
  app.delete('/course/code/:course_id',courses.deleteByCourseCode);
  app.get('/discipline/getAll',courses.getAllDiscipline);
  app.get('/course/getAll',courses.getAllCourse);
  app.get('/professor/getAll',courses.getAllProfessor);
  app.get('/professor/:professor_name/course/:course_name',courses.findLink);
  app.get('/list/:course_id', courses.listFilesInFolder);
}
