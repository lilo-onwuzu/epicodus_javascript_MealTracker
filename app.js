var router = require('./router.js');
var port = process.env.PORT || 3000;

//Create a web server
var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
}).listen(port);
console.log('Server running');
