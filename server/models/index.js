var fs = require('fs'),
path = require('path'),
Sequelize = require('sequelize'),
lodash = require('lodash'),
sequelize = null,
db = {};
    
/* replace HEROKU_URL with your heroku url */
if (process.env.HEROKU_URL){
    var match = process.env.HEROKU_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
 
    sequelize = new Sequelize(match[5], match[1], match[2], {
        dialect:  'postgres',
        protocol: 'postgres',
        port:     match[4],
        host:     match[3],
        logging:  true
    })
}
else{
    sequelize = new Sequelize('app', 'root', 'password');
}
 
fs.readdirSync(__dirname)
    .filter(function(file){
	    return (file.indexOf('.') !== 0) && (file !== 'index.js');
	})
	.forEach(function(file){
		var model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});
 
Object.keys(db).forEach(function(modelName){
	if ('associate' in db[modelName]) {
		db[modelName].associate(db);
	}
})
 
module.exports = lodash.extend({
	sequelize: sequelize,
	Sequelize: Sequelize
}, db);