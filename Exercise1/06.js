// 문제 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
var num = 10;
while (num > 0) {
  if(num % 2 !== 0) {
    console.log(num);
  }
  num--;
}