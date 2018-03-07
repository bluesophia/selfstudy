var http = require('http');
var server = http.createServer(function(req, res){
	console.log('Respondin to a request');
	res.end('<h1>test2</h1>');
});

server.listen(8001);
