var express = require('express');
var app = express();

app.use('/static',express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/app'));
app.get('/', function(req, res) {
  res.sendfile('./app/views/shared/_layout-main.html');
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 400;
    next(err);
});
module.exports = app;