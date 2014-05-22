var db = require('../server/models'),
superagent = require('superagent'),
fs = require('fs'),
expect = require('expect.js');

before(function (done){
    db.sequelize
    .sync({ force: true})
    .complete(function (err){
        if (err){
            console.error('Error dropping database: ' + err);
            throw err;
        }
        else{
            done();
        }
    })
});

describe('Create a customer using /api/user', function (){
    it('create a customer', function (done){
        superagent.post('http://localhost:8000/api/user')
        .send({
            username: 'test@test.com',
            password: 'test'
        })
        .end(function (err, res){
            expect(err).to.eql(null);
            expect(res).to.exist;
            expect(res.status).to.eql(200);
            done();
        })
    })
});