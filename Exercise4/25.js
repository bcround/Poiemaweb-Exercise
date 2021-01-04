/*
25. 평균구하기
인수로 주어진 배열의 평균을 구하는 함수를 완성하라.
*/

function average(array){
  if (!array || array.length === 0) return 'Please input non-empty array';
  return array.reduce((acc, cur) => acc += cur, 0) / array.length;
}

console.log(average([3, 4, 5])); // 4