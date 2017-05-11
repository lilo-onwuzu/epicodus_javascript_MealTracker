var express = require('express');
var router = express.Router();
var port = process.env.PORT || 3000;

//Create a web server
var https = require('https');
https.createServer(function (request, response) {
  router.home(request, response);
}).listen(port);
console.log('Server running');
