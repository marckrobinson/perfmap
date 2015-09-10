var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var port = process.env.PORT || 50000;

app.use(express.static(__dirname + '/public'));
app.listen(port);
