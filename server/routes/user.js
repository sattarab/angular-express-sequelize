var db = require('../models'),
userService =  require('../services/userService');

exports.create = function (req, res){
    if(!req.body.hasOwnProperty('username') || !req.body.hasOwnProperty('password')){
        console.log('Error 400: Post syntax incorrect.');
        res.send(400, 'Error 400: Post syntax incorrect.');
    }
    else
    {
        userService.create(req, res);
    }
};

exports.read = function (req, res){
    userService.read(req, res);
};

exports.update = function (req, res){
    var data = req.body;
    
    if (data.password){
        console.log('Data: ' + JSON.stringify(data));
        data.password = security.hashPassword(data.password);
    }
    userService.update(req, res, data);
};

exports.delete = function (req, res){
    userService.delete(req, res);
};
