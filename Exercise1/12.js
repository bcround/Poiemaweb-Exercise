// 문제 12. 삼각형 출력하기 - pattern 2
/* 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 
개행문자(‘\n’)를 사용하여 개행한다. 
완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다. */
var result = '';
for (var i = 5; i > 0; i--) {
  for (var j = 5; j > i; j--) {
    result += ' ';
  }
  for (var k = 0; k < i; k++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);