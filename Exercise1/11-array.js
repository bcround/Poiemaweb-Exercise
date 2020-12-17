// var result = '';
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++){
//     result += '*';
//   }
//   result += '\n';
// }
// console.log(result);


let result = '';
const line = Array.from({ length: 5 }, (_, i) => ++i);
// console.log(line);
result = line.reduce((acc, cur) => acc + '*'.repeat(cur) + '\n' , '');
console.log(result);