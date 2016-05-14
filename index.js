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

// 모델이 수정되면 DB에서 직접 삭제해주세요.
var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

var Review = sequelize.define('review', {
  comment: {
    type: Sequelize.STRING
  }
});

User.hasMany(Review, {as: 'Review'});

User.sync({force:false});
Review.sync({force:false});


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

app.get('/test', function(req, res) {
  User.create({
    firstName: 'John3',
    lastName: 'Hancock3'
  }).then(function (user) {
    Review.create({
      comment: 'comment'
    }).then(function(review) {
        user.setReview(review);
        
        res.send('finish!');
    });
  });
});


app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});