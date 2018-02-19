var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	fs.readFile('app/index.html', function(err, data){
		res.end(data);
		//소스코드를 데이타를 통해 넘어옴 ->file streaming
	})
});

server.listen(8000);