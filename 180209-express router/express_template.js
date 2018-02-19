var express = require('express');
var app = express(); // 이 아래다가 추가해주세요 
     
app.set('view engine', 'ejs'); // view engine를 ejs로 하겠다는거에요
app.set('views', path.join(__dirname, 'view')); // views 폴더안에 내용들을 view로 쓰겠다는거에요
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
    
app.get('/', function(req, res){
  res.render('index', {title : '메인 페이지입니다. 저는 ejs 템플릿엔진을 사용해요'});
});
app.get('/login', function(req, res){
  res.send('Login Page')
});
app.get('/join', function(req, res){
  res.send('join Page')
});
app.listen(3000, function(){
  console.log('Server Run... port 3000');
});