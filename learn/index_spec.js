var request = require('supertest');
var app = require('./index');

describe('index', function () {
    it('should be ok', function (done) {
        request(app).get('/')
            .expect(200, 'bye', done);
    });
});
