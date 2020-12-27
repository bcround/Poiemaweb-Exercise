/*
17. 소수 찾기
numberOfPrime 메서드는 정수 n을 매개변수로 입력받는다. 
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라. 
예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환한다.

소수(素數, prime number)는 2, 3, 5, 7, 11, 13, 17…과 같이 
1과 자신 이외의 어떤 수로도 나눠지지 않는 1보다 큰 양의 정수이다.
*/

function numberOfPrime(n) {
  // 처음 짠 코드
  let count = 0;

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) break;
      if (i % j === 0 && i === j) count++;
    }
  }

  return count;

  // 친구에게 에라토스테네스의 체를 듣고 만든 코드
  // const numArr = Array.from({ length: n - 1 });
  // numArr.fill(true);

  // for (let i = 2; i < n; i++) {
  //   for (let j = i ** 2; j <= n; j += i) {
  //     if (numArr[j - 2]) {
  //       numArr[j - 2] = false;
  //     }
  //   }
  // }

  // return numArr.filter(num => num).length;
}

console.log(numberOfPrime(10)); // 4