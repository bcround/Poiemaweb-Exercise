// var result = '';
// for (var i = 0; i < 5; i++) {
//   for (var j = 4; j > i; j--) {
//     result += ' ';
//   }
//   for (var k = 0; k <= i; k++) {
//     result += "*";
//   }
//   result += '\n';
// }
// console.log(result);

let result = '';
const line = Array.from({ length: 5 }, (_, i) => ++i);
result = line.reduce((acc, cur, _, arr) => acc + ' '.repeat(arr.length - cur) + '*'.repeat(cur) + '\n' , '');
console.log(result);