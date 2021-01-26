const uppercase = require('./ex01')
const getUserName = require('./ex02');
const getRepos = require('./ex04');

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

   test('testando se usuario não é encontrado', async () => {
      try {
         return await getUserName(2);
      } catch (error) {
         expect(error).toMatchObject({ error: 'User with 2 not found.' });
      }
   });
});

describe('testando repositorio github', () => {
   test('testando se repositorios todo-list', () => {
      const url = 'https://api.github.com/users/tryber/repos';
      return getRepos(url).then((data) => {
         expect(data).toContainEqual('sd-01-week4-5-project-todo-list');
      });
   });

   test('testando se repositorios meme-generator', () => {
      const url = 'https://api.github.com/users/tryber/repos';
      return getRepos(url).then((data) => {
         expect(data).toContainEqual('sd-01-week4-5-project-meme-generator');
      });
   });
});

describe('Scoped', () => {
   beforeEach(() => console.log('1 - beforeEach'));
   afterEach(() => console.log('1 - afterEach'));

   test('', () => console.log('1 - test'));

   describe('Scoped / Nested block', () => {
      beforeEach(() => console.log('2 - beforeEach'));
      afterEach(() => console.log('2 - afterEach'));

      test('', () => console.log('2 - test'));
   });
});

