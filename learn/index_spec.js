var app = require('./index');
var request = require('supertest')(app);

describe('index', function () {
    it('should be ok', function (done) {
        request.get('/')
            .expect(200, 'bye', done);
    });
});
