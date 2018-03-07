var fs = require('fs');

//sync
console.log(1);
var data = fs.readFileSync('text.txt',{encoding:'utf8'});
//readFile이 끝나야 console.log(data);가 실행된다
console.log(data);

//async
console.log(2);
fs.readFile('text.txt',{encoding:'utf8'}, function(err, data){
	//readFile에다가 작업을 던져준다
	//최종적 작업순서는 1-2-4-3
	console.log(3);
	console.log(data);
})
console.log(4);

/* nodejs는 싱글스레드로 동작하는 시스템이다 
 ex) 웹서버가 웹에플리케이션안에서 파일을 읽는작업이 있는데 읽는 10분동안 아무도 사용못함
 -> nodejs활용
*/  