var express = require('../lib/express');

var app = express();
app.use(function (req, res) {
    res.end('bye');
});


//app.listen(3000);
//console.log('listening on port 3000');

module.exports = app;
