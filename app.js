var express = require('express');
var app = express();

app.use('/static',express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/js'));
app.get('/', function(req, res) {
  res.sendfile('./js/views/shared/_layout-main.html');
});
module.exports = app;