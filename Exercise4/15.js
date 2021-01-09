/*
15. 직사각형이 되는 나머지 좌표 구하기
임의의 좌표 3개가 주어질 때 직사각형이 되는 나머지 1개의 좌표를 구하라. 
예를 들어, [[1, 4], [3, 4], [3, 10]]가 주어지면 [1, 10]을 구한다.

for 문은 사용하지 않도록 하자.
*/

function getRestCoordinate(array) {
  let result = [];

  const fArray = array.flat();
  const [a, b] = fArray.filter((elem, index, arr) => arr.indexOf(elem) !== index);
  
  result = fArray.filter(elem => (elem !== a && elem !== b));
  
  return fArray.indexOf(result[0]) % 2 ? result.reverse() : result;
}

console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]
console.log(getRestCoordinate([[1, 4], [1, 10], [3, 10]])); // [3, 4]
console.log(getRestCoordinate([[1, 4], [3, 4], [1, 10]]));  // [3, 10]
console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]
console.log(getRestCoordinate([[9, 7], [4, 1], [9, 1]])); // [4, 7]
console.log(getRestCoordinate([[9, 3], [4, 1], [4, 3]])); // [ 9, 1 ]
console.log(getRestCoordinate([[9, 5], [3, 5], [9, 2]])); // [ 3, 2 ]