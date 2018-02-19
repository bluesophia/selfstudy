var http = require('http'); // CommonJS 방식 http 모듈 가져오기 (AMD, CommonJS)
var hostname = '127.0.0.1'; //ip설정
var port = 8080; //port설정
/*여기서 port라는 개념이 등장하는데요 간단히 말씀드리면 웹서버와 연결되는 문이라고 생각해주세요.
우리 컴퓨터의 port는 0번부터 65535개의 port가 존재합니다.

우리가 localhost:8080 으로 접속을 하게되면
컴퓨터가 이해하기론 localhost = 127.0.0.1이라고 인식을 합니다.
뒤이어 몇번째 문으로 들어갈지 port를 찾게되는데요. 위에 설정한것 처럼 8080번째 문을 찾아갑니다.*/
http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type' : 'text/plain'});//head설정
	response.write('Hello Node.js'); //화면에 노드제이에스 그려주겠다
	response.end();//응답끝내기
}).listen(port, hostname, function(){
	console.log(port, 'Server Run....');
})