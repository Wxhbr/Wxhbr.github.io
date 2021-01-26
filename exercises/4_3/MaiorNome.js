function MaiorNome (array){
    let nome = array[0];
    let tamanhoNome = array[0].length;    
    for (i=0;i<array.length-1;i++){        
        if (tamanhoNome < array[i+1].length){
            tamanhoNome = array[i+1].length;       
            nome = array[i+1];  
        }                        
    }
    return nome;
}

console.log(MaiorNome(['José123213', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log(MaiorNome(['José', 'Lucas12123', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log(MaiorNome(['José123213', 'Lucas', 'Nádia123123', 'Fernanda', 'Cairo', 'Joana']));
console.log(MaiorNome(['José123213', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana123123']));
