/*
10. 배열의 최대/최소값 구하기

배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.
*/

function getMaxValueFromArray(array) { 
  if (!array) return 'Please input something that is non-empty array.';

  return array.length ? Math.max(...array) : 'Empty Array';
}

console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7
console.log(getMaxValueFromArray()); // 7

function getMinValueFromArray(array) {
  if (!array) return 'Please input something that is non-empty array.';

  return array.length ? Math.min(...array) : 'Empty Array';
}

console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5
console.log(getMinValueFromArray([])); // -5
