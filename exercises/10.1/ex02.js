const assert = require('assert');

function myIndexOf(arr, item) {
  return arr.findIndex((element) => element === item);
}
/*
Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
*/
let expected = myIndexOf([1, 2, 3, 4], 3);
assert.equal(expected, 2, 'o indice do elemento 3 é 2');

expected = myIndexOf([1, 2, 3, 4], 5);
assert.equal(expected, -1, 'O retorno é -1 para qndo nao for encontrado o indice');
