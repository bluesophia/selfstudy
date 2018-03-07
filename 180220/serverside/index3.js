var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	var url = req.url;
	var fileName = 'index.html';

	if(url.length > 1 ) {
		fileName = url.substring(1);
	}
	console.log(fileName);

	fs.readFile('app/'+fileName, function(err, data){
		res.end(data);
	});
});

server.listen(8001);