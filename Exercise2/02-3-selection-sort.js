// 처음 짰던 코드, 치명적 오류: 배열안에 요소가 9999을 넘는 숫자가 있으면 작동안함.
// function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let min = 9999;
//     let minIndex;
    
//     for (let j = 0 + i; j < array.length; j++) {
//       if (min > array[j]) {
//         min = array[j];
//         minIndex = j;
//       }
//       console.log(min, minIndex);
//     }
//     const temp = array[minIndex];
//     array[minIndex] = array[i];
//     array[i] = temp;
//   }
//   return array;
// }

// 두 번째 시도
function selectionSort(array) {
  let minIndex;
  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i;
    for (let j = i; j < array.length - 1; j++) {
      if (array[minIndex] > array[j + 1]) {
        minIndex = j + 1;
      }
    }
    const temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
    // 배열 디스트럭처링 할당
    // [array[minIndex], array[i]] = [array[i], array[minIndex]];
  }
  return array;
}

console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]