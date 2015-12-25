var express = require('express');
var app = express();

app.use(express.static('content/css'));
app.use(express.static('content/images'));
app.use(express.static('js'));
app.use(express.static('views'));
app.get('/', function(req, res) {
    res.sendfile('./views/layout/shell.html');
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 400;
    next(err);
});
module.exports = app;