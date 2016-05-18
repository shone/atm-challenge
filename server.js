// Serves the local directory on the given port, e.g.
// 
// node server.js --port 8080

var express = require('express');
var http    = require('http');
var yargs   = require('yargs');

var app = express();
var server = http.Server(app);

app.use(express.static('.'));

var port = yargs.argv['port'] || 8080;

server.listen(port, function() {
  console.log('Running on port ' + port);
});