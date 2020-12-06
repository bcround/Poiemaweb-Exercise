// 처음에 생각했던 방법 (재귀)
function bubbleSort(array) {
  let temp = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) return bubbleSort(array);
  }
  return array;
}
// 두번째 방법 어차피 맨뒤에 제일 큰 숫자가 오니까 한 번 돌면 맨 뒤 숫자는 비교를 안해도 되게
function bubbleSort(array) {
  let temp = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}


console.log(bubbleSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]
console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]