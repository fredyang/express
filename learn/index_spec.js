var app = require('./index');
var supertest = require('supertest');
//var request = supertest.agent(app);
//var request = supertest.agent(app);
//looks there is no difference for these two approach
var request = supertest(app);

describe('index', function () {
    //it('should be ok', function (done) {
    //    request.get('/')
    //        .expect(200, 'bye', done);
    //});

    it('should save cookies', function(done){
        request
            .get('/')
            .expect('set-cookie', 'cookie=hey; Path=/', done);
    });

    it('should send cookies', function(done){
        request
            .get('/return')
            .expect('hey', done);
    });

});
