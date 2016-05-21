var Sequelize = require('sequelize');

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
  loginId: { type: Sequelize.STRING },
  password:{ type: Sequelize.STRING }
});

var Food = sequelize.define('food', {
  name:  { type: Sequelize.STRING },
  maker: { type: Sequelize.STRING }
});

var Review = sequelize.define('review', {
  comment: { type: Sequelize.STRING }
});

User.hasMany(Review, {as: 'Review'});
Food.hasMany(Review, {as: 'Review'});

User.sync({force:false}).then(function() {
  Food.sync({force:false}).then(function() {
    Review.sync({force:false});
  });
});

var db = {};
db.User = User;
db.Food = Food;
db.Review = Review;

module.exports = db;
