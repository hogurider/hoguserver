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

var User = require('./user')(sequelize);
var Food = require('./food')(sequelize);
var ReviewImage = require('./review-image')(sequelize);
var Review = require('./review')(sequelize);
var Wishlist = require('./wishlist')(sequelize);

// 테이블간의 관계 정의
User.hasMany(Review);
Review.belongsTo(User);
Food.hasMany(Review);
Review.belongsTo(Food);
Review.hasMany(ReviewImage);
ReviewImage.belongsTo(Review);
Wishlist.hasMany(Food);
Food.belongsTo(Wishlist);

// 테이블 생성 함수. 테이블이 추가 되면 여기에 추가해줘야한다.
var createTable = function() {
  User.sync({force:false}).then(function() {
    Wishlist.sync({force:false}).then(function() {
      Food.sync({force:false}).then(function() {
        Review.sync({force:false}).then(function() {
          ReviewImage.sync({force:false});
        });
      });
    });
  });
}

// 모델이 수정되면 drop = true로 변경해주세요.
var drop = true;
if (drop) {
  ReviewImage.drop().then(function() {
    Review.drop().then(function() {
      Food.drop().then(function() {
        Wishlist.drop().then(function() {
          User.drop().then(function() {
            createTable();
          });
        });
      });
    });
  });
} else {
  createTable();
}

var db = {};
db.User = User;
db.Food = Food;
db.Review = Review;

module.exports = db;
