function somatorio (number){
    let soma=0;
    if (number > 0){
        for (i=1;i<=number;i++){
            soma += i;
        }
        return soma
    }
    return "ERRO:Permitido somente numeros inteiros."
}

console.log(somatorio(5));
console.log(somatorio(-1));
console.log(somatorio(0));
console.log(somatorio(1));
console.log(somatorio(20));