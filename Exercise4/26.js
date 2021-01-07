/*
26. 최단 거리 1차원 점의 쌍 구하기 (DAUM)
1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라. 
(단 점들의 배열은 모두 정렬되어있다고 가정한다.) 
예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 
결과값은 [[3, 4], [23, 24]]가 될 것이다.
*/

function findMinDistance(array){
  let distArr = [];
  let indices = [];
  let answer = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j > i; j--) {
      distArr = [...distArr, array[j] - array[i]];
    }
  }

  const min = Math.min(...distArr);

  distArr.forEach((dist, index) => {
    if (dist === min) indices = [...indices, index];
  });

  indices.forEach(index => {
    answer = [...answer, [array[index], array[index + 1]]];
  })

  return answer;
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]