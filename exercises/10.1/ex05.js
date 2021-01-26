const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}
/*
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Faça uma chamada para a função myRemoveWithoutCopy e verifique que o array passado por parâmetro sofreu alterações
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

*/
let array = [1, 2, 3, 4, 5, 6];
let actual = myRemoveWithoutCopy([1, 2, 3, 4], 3);
let expected = [1, 2, 4];
assert.deepStrictEqual(actual, expected);

expected = [1, 2, 3, 4];
assert.notDeepStrictEqual(actual, expected);

myRemoveWithoutCopy(array, 5);
actual = array;
expected = [1, 2, 3, 4, 5, 6];
assert.notDeepStrictEqual(actual, expected);

actual = myRemoveWithoutCopy([1, 2, 3, 4], 5);
expected = [1, 2, 3, 4];
assert.deepStrictEqual(actual, expected);

