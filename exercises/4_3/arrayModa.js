function AcharModa (array){
    //let primeiraPos = array[0];
    let arrayModa = 0;
    let modaControle = 0; 
    let comparacaoMaior = 0;   
    for (i=0;i<array.length-1;i++){
        modaControle = 0;
        for(let numero of array){            
            if (numero == array[i]){
                modaControle += 1;
                if (modaControle > comparacaoMaior){
                    arrayModa = array[i];
                    comparacaoMaior = modaControle;
                }
            }
            
        }

    }
    return arrayModa;
}

console.log(AcharModa([2, 3, 2, 5, 8, 2, 3]));
console.log(AcharModa([2, 3, 2, 5, 8, 2, 3, 3, 4, 5, 6, 7, 8, 3]));
console.log(AcharModa([2, 3, 2]));
console.log(AcharModa([2, 3, 2, 5, 5, 5]));
console.log(AcharModa([2, 3, 2, 5, 8, 2, 3, 8, 8, 8]));
