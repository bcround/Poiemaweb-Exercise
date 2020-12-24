// 처음 짰던 코드 문제점: for문의 조건문에 &&으로 두 가지 조건이 들어간게 맘에 안든다.
// function insertionSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j > 0 && array[j] < array[j - 1]; j--) {
//       const temp = array[j];
//       array[j] = array[j - 1];
//       array[j - 1] = temp;
//       // 배열 디스트럭처링 할당
//       // [array[j], array[j - 1]] = [array[j - 1], array[j]];
//     }
//   }
//   return array;
// }

// 두 번째 방법: for문의 조건문을 밖에 if문으로 빼내었다.
function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else break;
      // 배열 디스트럭처링 할당
      // [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }
  }
  return array;
}

console.log(insertionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(insertionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]