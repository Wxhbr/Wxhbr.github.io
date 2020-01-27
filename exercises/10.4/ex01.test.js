const uppercase = require('./ex01')
const getUserName = require('./ex02');

describe('testes ex01 to.upperCase', () => {
   test('transforma test toda em maiscula TEST', done => {
      uppercase('teste', (str) => {
         expect(str).toBe('TESTE');
         done();
      });
   });
});

describe('testes ex02 resultado funcao getUserName', () => {
   test('testando se usuario é encontrado', async () => {
      return await getUserName(4).then(value => {
         expect(value).toEqual('Mark');
      });
   });

   test('testando se usuario não é encontrado', async() => {
      try {
         return await getUserName(2);
      } catch(error) {
         expect(error).toMatchObject({error: 'User with 2 not found.'});
      }
   });
});

