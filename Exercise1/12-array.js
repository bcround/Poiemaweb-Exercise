// var result = '';
// for (var i = 5; i > 0; i--) {
//   for (var j = 5; j > i; j--) {
//     result += ' ';
//   }
//   for (var k = 0; k < i; k++) {
//     result += '*';
//   }
//   result += '\n';
// }
// console.log(result);

let result = '';
const line = Array.from({ length: 5 }, (_, i) => ++i);
line.reverse();
result = line.reduce((acc, cur, i) => acc + ' '.repeat(i) + '*'.repeat(cur) + '\n', '');
console.log(result);