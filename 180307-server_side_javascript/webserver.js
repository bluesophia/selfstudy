const http = require('http');
//require('http'); http 모듈 = 부품 
//const 한번 할당이 되면 변수를 바꿀 수 없다 = 상수
//http라고 하는 모듈이 필요하다, 요구된다 -> require 함수 실행 
//return값을 http에 담는다 
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	//*객체지향 한번 더 읽어보기
	//createServer함수 호출 
	//server라는 객체를 리턴한다
	//이 객체는 listen이라는 메소드를 가지고 있었기 때문에 호출할 수  있었던 것 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  //응답하는 코드
});

server.listen(port, hostname, () => {
	//listen method 
  console.log(`Server running at http://${hostname}:${port}/`);
});
//nodejs가 웹서버를 만들고 1337을 listening하게 시키는 코드 
//사용자가 접속했을 때 127.0.0.1에 접속한 사용자에 대해서 응담하라

