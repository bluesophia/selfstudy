var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.send('Hello Express');
});

app.get('/login', function(req, res){
	res.send('Login Page');
});
app.get('/join', function(req, res){
	res.send('join Page');
});
app.listen(8080, function(){
	console.log('Server Run....8080');
});