let numeroPrimo = 89;

function Primo (numero){
    if (numero != 1){
        for (i = 2; i < numero; i++){
            if (numero % i == 0){
                return ("O número " + numero + " não é primo.");
            }
        }  
        return ("O número " + numero + " é primo.");
    } else {
        return ("O número " + numero + " não é primo.");
    }    
}

console.log(Primo(numeroPrimo));
console.log(Primo(8));
console.log(Primo(17));
console.log(Primo(150));
console.log(Primo(131));

