var foodController = {};

foodController.select = function(req, res, db) {
    db.Food.findById(req.params.id).then(function(food) {
        res.send(food);
    })
};

foodController.insert = function(req, res, db) {
    db.Food.create({
        name:  req.body['name'],
        maker: req.body['maker']
    }).then(function(food) {
        res.send({result:true});        
    });
}

module.exports = foodController;
