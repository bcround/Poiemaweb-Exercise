/*
2. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.

단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다. 
예를 들어 8808은 3, 8888은 4로 카운팅 해야 한다.

(hint) 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]
*/

// 처음 한 방법: 강사님이 forEach는 되도록 최후의 수단으로 남겨놓으라고 하셨지....

// function getCount8 () {
//   const nums = Array.from({ length: 10000 }, (_, index) => ++index + '');
//   let countEights = 0;

//   nums.forEach(num => {
//     countEights += [...num].reduce((acc, cur) => cur === '8' ? ++acc : acc, 0);
//   });
  
//   return countEights;
// }

// 두 번째 한 방법: reduce 메서드 안의 콜백함수가 가독성이 좋지 않다..... -> 함수로 빼보자
// function getCount8 () {
//   const nums = Array.from({ length: 10000 }, (_, index) => ++index + '');

//   return nums.reduce((acc, cur) => acc + [...cur].reduce((acc, cur) => cur === '8' ? ++acc : acc, 0), 0);
// }

// 세 번째 방법: reduce안에 있는 reduce를 빼서 함수로 만들어서 가독성을 높여보았다 (성공인가 실패인가?....)
// function getCount8 () {
//   const nums = Array.from({ length: 10000 }, (_, index) => ++index + '');

//   const check8 = cur => [...cur].reduce((acc, cur) => cur === '8' ? ++acc : acc, 0);

//   return nums.reduce((acc, cur) => acc + check8(cur), 0);
// }

// 네 번째 방법: 위의 방법들은 문자열로 1 ~ 10000을 만들고 문자열을 배열로 바꾸어서 배열 고차함수를 사용하였다
// 하지만 문제에서 문자열로 변환할 수 없다는 조건이 주어지면??
function getCount8 () {
  const nums = Array.from({ length: 10000 }, (_, index) => ++index);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    while (num > 0) {
      if (num % 10 === 8) count++;
      num = Math.floor(num / 10);
    }
  }
  return count;
}

console.log(getCount8()); // 4000