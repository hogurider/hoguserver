/**
 * Created by HJ on 2016. 5. 14..
 */
var userController = {};

userController.users = function(req, res) {
    res.send({user:'username'});
};

module.exports = userController;
