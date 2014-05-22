var db = require('../models');

exports.create = function (req, res, callback){
    db.User.create({
        username: req.body.username,
        password: req.body.password
    })
    .success(function (user){
        if (callback){
            callback(user)
        }
        else {
          res.send(200, user);  
        }
    })
    .error(function (err){
        console.log('error: userService.create');
        res.send(500, {error: 'error: userService.create'});
    })
};

exports.read = function (req, res, callback){
    db.User.find({
        where: {
            username: req.param('username')
        }
    })
    .success(function (user){
        if (user){
            if (callback){
                callback(user)
            }
            else {
                res.send(200, user);
            }
        }
        else {
            console.log('error: userService.read - user does not exist');
            res.send(500, {error: 'error: userService.read - user does not exist'});
        }
    })
    .error(function (err){
        console.log('error: userService.read');
        res.send(500, {error: 'error: userService.read'});
    })
};

exports.readAll = function (req, res, callback){
    db.User.findAll()
    .success(function (users){
        if (callback){
            callback(users);
        }
        else{
            res.send(200, users);
        } 
    })
    .error(function (err){
        console.log('error: userService.readAll');
        res.send(500, {error: 'error: userService.readAll'});
    })
};

exports.update = function (req, res, data, callback){
    db.User.find({
        where: {
            username: req.param('username')
        }
    })
    .success(function (user){
        if (user){
            user.updateAttributes(data)
            .success(function (user){
                if (callback){
                    callback(user)
                }
                else{
                    res.send(200, user);
                }
            })
            .error(function (err){
                console.log('error: userService.update - when updating attributes');
                res.send(500, {error: 'error: userService.update - when updating attributes'});
            })
        }
        else{
            console.log('error: userService.update - user does not exist');
            res.send(500, {error: 'error: userService.read - user does not exist'});
        }
    })
    .error(function (err){
        console.log('error: userService.update');
        res.send(500, {error: 'error: userService.update'});
    })
};

exports.delete = function (req, res){
    db.User.find({
        where: {
            username: req.param('username')
        }
    })
    .success(function (user){
        if (user){
            user.destroy()
            .success(function (){
                console.log('successfully deleted the user');
                res.send(200, {message: 'successfully deleted the user'});
            })
            .error(function (err){
                console.log('error: userService.delete - deleting user');
                res.send(500, {error: 'error: userService.delete - deleting user'});
            })
        }
        else{
            console.log('error: userService.delete - user does not exist');
            res.send(500, {error: 'error: userService.delete - user does not exist'});
        }
    })
    .error(function (err){
        console.log('error: userService.delete');
        res.send(500, {error: 'error: userService.delete'});
    })
};