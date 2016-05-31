var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require('./models');

app.use(express.static('apidoc'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var router = require('./routes')(app, db);

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
