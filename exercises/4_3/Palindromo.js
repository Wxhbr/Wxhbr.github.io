function verificarPalindrome (palavra){
    palavra = palavra.toLowerCase();
    let arrayString = palavra.split("");
    let metadeArray = Math.floor(arrayString.length/2)
    let tamanhoArray = arrayString.length-1;

    for (i=0;i<metadeArray;i++){
        if (arrayString[i] != arrayString[tamanhoArray-i]){
            return false;
        }
    }
    return true;
}

let string = "arara";
let string2 = "marrocos"
let string3 = "corrida"
let string4 = "AiBofOBia"

console.log (verificarPalindrome(string));
console.log (verificarPalindrome(string2));
console.log (verificarPalindrome(string3));
console.log (verificarPalindrome(string4));