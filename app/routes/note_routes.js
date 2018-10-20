const insert = require("./../controllers/insert_into");

module.exports = function(app, db) {
  app.post('/insert', insert);
}
