/*
4. 문자열 내 p와 y의 개수
numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 인수로 전달받는다. 
s에 존재하는 ‘p’의 개수와 ‘y’의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 
대소문자를 구별하지 않으며 ‘p’, ‘y’ 모두 하나도 없는 경우는 항상 true를 리턴한다.

예를 들어 s가 ‘pPoooyY’면 true를 리턴하고 ‘Pyy’라면 false를 리턴한다.
*/

function numPY(s) {
  let pCount = 0;
  let yCount = 0;

  if (s === undefined || s === '') return true;
  s = s.toLowerCase();

  if (!s.includes('p') && !s.includes('y')) return true;

  for (const char of s) {
    pCount = char === 'p' ? pCount + 1 : pCount;
    yCount = char === 'y' ? yCount + 1 : yCount;
  }

  return pCount === yCount ? true : false;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true