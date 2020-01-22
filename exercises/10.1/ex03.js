const assert = require('assert');

function mySum(arr) {
  return arr.reduce((total, current) => total + current, 0);
}
/*
Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
*/

let expected = mySum([1, 2, 3, 4]);
assert.equal(expected, 10, 'A soma dos elementos do array [1, 2, 3, 4] é 10');

expected = mySum([1, -2, -3, 4])
assert.equal(expected, 0, 'A soma dos elementos do array [1, -2, -3, 4] é 0');