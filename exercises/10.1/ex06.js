const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
/*
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

let actual = myFizzBuzz(15);
let expected = 'fizzbuzz';
assert.strictEqual(actual, expected);

actual = myFizzBuzz(18);
expected = 'fizz';
assert.strictEqual(actual, expected);

actual = myFizzBuzz(25);
expected = 'buzz';
assert.strictEqual(actual, expected);

actual = myFizzBuzz(17);
expected = 17;
assert.strictEqual(actual, expected);

actual = myFizzBuzz('valor');
expected = false;
assert.strictEqual(actual, expected);
