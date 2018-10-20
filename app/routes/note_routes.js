const createTables = require("./../controllers/createTables");
const logins = require("./../controllers/Logins");

module.exports = function(app) {
  app.get('/', createTables);
  app.get('/users', logins.getAll);
  app.post('/user', logins.addUser);
}
