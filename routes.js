var routes  = require('./server/routes');

exports = module.exports = function (app, passport){
    app.get('/', function(req, res){
        res.render('index');
    });
    
    app.post('/api/user', routes.user.create);
}