var express = require('express'),
http = require('http'),
path = require('path'),
db = require('./server/models'),
logfmt = require('logfmt'),
app = express(),
io = require('socket.io'),
socket = require('./server/routes/socket');

app.configure(function(){
    app.set('port', process.env.PORT || 8000);
    app.use(logfmt.requestLogger());
    app.set('views', path.join(__dirname, '/client/views'));
    app.set('view engine', 'ejs');
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.multipart());
    app.use(express.cookieParser(''));
    app.use(express.session({ secret: 'secret' }));
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'client')));
})

if (app.get('env') === 'development') {
    app.use(express.errorHandler({ showStack: true, dumpExceptions: true}));
}

require('./routes')(app);

db.sequelize
.sync({ force: true})
.complete(function(err){
    if (err){
        throw err;
    } 
    else{
        var server = http.createServer(app).listen(app.get('port'), function() {
            console.log('Express server listening on port ' + app.get('port'));
        });
        io = io.listen(server);
        io.set('transports',['xhr-polling']);
        io.sockets.on('connection', socket);
    }
})