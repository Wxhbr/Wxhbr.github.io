let numero1 = Math.floor (Math.random()*(100 -(-100))+(-100));
let numero2 = Math.floor (Math.random()*(100 -(-100))+(-100));
let numero3 = Math.floor (Math.random()*(100 -(-100))+(-100));

function NumeroPar (valor1, valor2, valor3){

    if ((valor1 % 2 == 0) || (valor2 % 2 == 0) || (valor3 % 2 == 0)){
       return true;
    }
    return false;
}

console.log (NumeroPar(numero1, numero2, numero3));
console.log (NumeroPar(3, 3, 3));
console.log (NumeroPar(3, 2, 3));
console.log (NumeroPar(3, 2, 2));