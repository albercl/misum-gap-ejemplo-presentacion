const assert = require('assert');

const array = [1, -1, 2, 3];

// Sin refactorizar
const result1 = array.filter((item) => {return item > 0; }).map((item) => { return item * 2;
}).reduce((acc, item) => {
  return acc + item; }, 
0);

console.log(result1);

// Refactorizado
const result2 = array
  .filter(item => item > 0)
  .map(item => item * 2)
  .reduce((acc, item) => acc + item, 0);

console.log(result2);

assert.equal(result1, result2);
