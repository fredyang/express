var request = require('supertest');

describe('index', function () {
    it('should be ok', function (done) {
       var app = require('./index');

        request(app).get('/')
            .expect(200, done);
    });
});
