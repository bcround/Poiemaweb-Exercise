// 문제 16. 역정삼각형 출력하기
var result = '';
for (var i = 5; i > 0; i--) {
  for (var j = 5; j > i; j--) {
    result += ' ';
  }
  for (var k = 0; k < i; k++) {
    result += '*';
  }
  for (var l = 1; l < i; l++) {
    result += '*';
  }
  result = i === 1? result : result + '\n';
}
console.log(result);