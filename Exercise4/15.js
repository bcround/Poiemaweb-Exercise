/*
15. 직사각형이 되는 나머지 좌표 구하기
임의의 좌표 3개가 주어질 때 직사각형이 되는 나머지 1개의 좌표를 구하라. 
예를 들어, [[1, 4], [3, 4], [3, 10]]가 주어지면 [1, 10]을 구한다.

for 문은 사용하지 않도록 하자.
*/

function getRestCoordinate(array) {
  const minArr = array.map(elem => Math.min(...elem));
  const maxArr = array.map(elem => Math.max(...elem));
  const result = [Math.min(...minArr), Math.max(...maxArr)];

  return result;
}

console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]
console.log(getRestCoordinate([[15, 10], [2, 5], [11, 3]])); // [2, 15]
