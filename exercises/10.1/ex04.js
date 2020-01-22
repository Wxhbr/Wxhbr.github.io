const assert = require('assert');

function myRemove(arr, item) {
  return arr.filter((elem) => elem !== item);
}
/*
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique que o array passado por parâmetro não sofreu alterações
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/
const array = [1, 2, 3, 4];
let expected = myRemove(array, 3);
assert.deepEqual(expected, [1, 2, 4], 'Erro: Retorno errado');
assert.notDeepEqual(expected, [1, 2, 3, 4], 'Erro: Retorno é igual a [1, 2, 3, 4]')
assert.deepEqual(array, [1, 2, 3, 4], 'ERRO: Array foi alterado');

expected = myRemove(array, 5);
assert.deepEqual(expected, [1, 2, 3, 4], 'ERRO: Retorno diferente do esperado');
