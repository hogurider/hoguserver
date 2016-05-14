var express = require('express');
var app = express();
var Sequelize = require('sequelize');

var userController = require('./controller/user');




var sequelize = new Sequelize('deadsea', 'deadsea', 'kpuce740', {
  host: 'kingdom8.synology.me',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});


/**
 * @api {get} /users Request User List
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSampleRequest http://localhost:5000/users
 */
app.get('/users', userController.users);


app.get('/', function (req, res) {
  res.send('Hello World!');
});



app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});