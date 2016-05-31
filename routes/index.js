var userController = require('./user');
var foodController = require('./food');

module.exports = function(app, db)
{

  /**
   * @api {get} /users Request User List
   * @apiName GetUser
   * @apiGroup User
   *
   * @apiSuccess {String} firstname Firstname of the User.
   * @apiSuccess {String} lastname  Lastname of the User.
   *
   * @apiSampleRequest http://localhost:5000/users/
   */
  app.get('/users', userController.users);

  // 특정 유저 정보 갖고오기
  //app.get('/users/:login_id', function(req, res) {
  //  userController.select(req, res, db);
  //});
  // 특정 유저 종보 업데이트 (TODO :세션 체크로 본인확인 필요)
  //app.put('/users/:login_id', function(req, res) {
  //  userController.update(req, res, db);
  //});

  /**
   * @api {get} /foods/:id 사료 정보들 갖고오기
   * @apiName Select Food List
   * @apiGroup Food
   *
   * @apiSuccess {Object} object 사료 데이터
   *
   * @apiSampleRequest http://localhost:5000/foods
   */
  app.get('/foods', function(req, res) {
    foodController.getList(req, res, db);
  });

  /**
   * @api {get} /foods/:id 특정 사료 정보 갖고오기
   * @apiName Select Food
   * @apiGroup Food
   *
   * @apiParam {Number} id 사료의 고유 id
   * @apiSuccess {Object} object 사료 데이터
   *
   * @apiSampleRequest http://localhost:5000/foods/:id
   */
  app.get('/foods/:id', function(req, res) {
    foodController.get(req, res, db);
  });


  /**
   * @api {post} /foods 새로운 사료 정보 입력 (관리자에서 쓰인다)
   * @apiName Insert Food
   * @apiGroup Food
   *
   * @apiParam {String} name 사료 이름
   * @apiParam {String} maker 사료 메이커
   *
   * @apiSuccess {Boolean} result 제대로 입력이 되었다면 true
   *
   * @apiSampleRequest http://localhost:5000/foods/
   */
  app.post('/foods', function(req, res) {
    foodController.post(req, res, db);
  });

  // 리뷰 작성
  //app.post('/reviews', function(req, res) {
  //  reviewController.insert(req, res, db);
  //});
  // 리뷰 삭제 (TODO: 세션체크로 본인이 확인된 경우에만 삭제)
  //app.delete('/reviews/:id', function(req, res, db) {
  //  reviewController.delete(req, res, db);
  //});


  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  app.get('/test', function(req, res) {
    db.User.create({
      firstName: 'John3',
      lastName: 'Hancock3'
    }).then(function (user) {
      db.Review.create({
        comment: 'comment'
      }).then(function(review) {
          user.setReview(review);

          res.send('finish!');
      });
    });
  });
}
