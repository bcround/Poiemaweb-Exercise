// 문제 15. 정삼각형 출력하기
var result = '';
for (var i = 0; i < 5; i++) {
  for (var j = 4; j > i; j--) {
    result += ' ';
  }
  for (var k = 0; k <= i; k++) {
    result += '*';
  }
  for(var l = 0; l < i; l++) {
    result += '*';
  }
  result = i === 4? result : result + '\n';
}
console.log(result);