var foodController = {};

foodController.get = function(req, res, db) {
    db.Food.findById(req.params.id).then(function(food) {
        res.send(food);
    })
};

foodController.getList = function(req, res, db) {
  db.Food.findAll({
    include: [db.Review]
  }).then(function(foods) {
      res.status(200).send(foods);
  });
}

foodController.post = function(req, res, db) {
    db.Food.create({
        name:  req.body['name'],
        maker: req.body['maker']
    }).then(function(food) {
        res.send({result:true});
    });
}

module.exports = foodController;
