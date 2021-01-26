function verificarFimPalavra (string1, string2){
    let tamanhoS1=string1.length-1;
    let tamanhoS2=string2.length-1;
    for (i=0;i<tamanhoS2+1;i++){
            if (string2.charAt(tamanhoS2 - i) !== string1.charAt(tamanhoS1 - i))
                return false;      
    }
    return true;
}

console.log(verificarFimPalavra("trybbaba", "beaba"));
console.log(verificarFimPalavra("trybe", "be"));
console.log(verificarFimPalavra("Marcos", "Joao"));
console.log(verificarFimPalavra("Rodrigo", "drigo"));
console.log(verificarFimPalavra("Ramos", "Bamos"));