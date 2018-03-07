const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//nodejs 사이트 
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n'); 
});
//익명함수를 준다.
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
//listen은 시간이 좀 걸리는 작업일 수 도 있기 때문에 비동기(콜백)로 작동한다.
