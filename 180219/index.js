var http = require('http');
var server = http.createServer(function(req,res){
	console.log('Responding to a requrest');
	res.end('<h1>Hello, Sophia</h1>');

});

server.listen(8000);