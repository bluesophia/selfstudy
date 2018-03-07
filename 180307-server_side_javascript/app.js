var express = require('express');
//express라는 변수를 통해서 express모듈을 사용할 수 있다.
var app = express();
//express모듈은 함수라서 app을 리턴하고 => 응용하여 어플리케이션을 만든다.
app.get('/', function(req, res){
// /는 홈의 의미
//req -> 사용자가 get방식을 이용하여 루트로 들어왔을 때 함수를 실행시키면서 
//첫번째 매개변수의 값으로 사용자가 요청한 것과 관련된 정보를 담고 있는 req객체를 전달
//res -> 응답에 대한 객체를 전달해주도록 약속이 되어있음
//요청한 형식에 따라서 콜백함수를 정의하면 된

	res.send('Hello home page');
});
app.get('/login', function(req, res){
	res.send('<h1>please login</h1>');
});
//사용자가 어떠한 경로로 들어왔을 때 어떤 것이 실행될 것인가 결정하는 것->
//연결하는 것이 get method가 하는 일 
//get method같은 것을 라우터라고 부름(라우팅(길을찾는)) 

app.listen(3000, function(){
	console.log('Connected 3000 port!');
});
//웹에플리케이션이 3000번을 리스닝한다
