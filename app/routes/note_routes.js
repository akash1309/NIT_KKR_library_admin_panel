const createTables = require("./../controllers/createTables");
const logins       = require("./../controllers/Logins");
const courses      = require("./../controllers/courses");

module.exports = function(app) {
  app.get('/', createTables);
  app.get('/users/:name/password/:password', logins.getUsers);
  app.post('/user', logins.addUser);
  app.get('/courses',courses.getCourses);
  app.post('/course', courses.addCourse);
  app.get('/course/code/:code',courses.findByCourseCode);
  app.get('/course/name/:name',courses.findByCourseName);
  app.get('/course/author/:author',courses.findByCourseAuthor);
  app.delete('/course/code/:code',courses.deleteByCourseCode);
}
