var express = require('../lib/express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
    res.cookie('cookie', 'hey');
    res.send();
});

app.get('/return', function(req, res){
    if (req.cookies.cookie) {
        res.send(req.cookies.cookie);
    }
    else {
        res.send(':(')
    }
});


app.use(function (req, res) {
    res.end('bye');
});


//app.listen(3000);
//console.log('listening on port 3000');

module.exports = app;
