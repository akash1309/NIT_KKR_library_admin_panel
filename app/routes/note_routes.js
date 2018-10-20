const createTables = require("./../controllers/createTables");
const logins       = require("./../controllers/Logins");
const courses      = require("./../controllers/courses");

module.exports = function(app) {
  app.get('/', createTables);
  app.get('/users', logins.getAll);
  app.post('/user', logins.addUser);
  app.post('/addrow', courses.addRow);
  app.get('/getrows',courses.getAllRows);
  app.get('/codename/:code',courses.wherecode);
  app.get('/course_name/:course_name',courses.wherecourse_name);
  app.get('/author/:author',courses.whereauthor);
  app.delete('/del/:code',courses.delete);
}
