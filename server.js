var express          = require('express');
var app              = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');

var db = require('./app/dbconnection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: '*'}));

//Checking database connection;
db.connect(function(err) {
  if (err){
    console.error('Error connecting database: ' + err.stack);
    return;
  }
  else{
    console.log("Database Connected!");
  }
});

require('./app/routes')(app);
app.listen(8080);
