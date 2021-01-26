function indiceArray (array){
    let indiceMaior = 0;
    let maior = array[0];    
    for (i=0;i<array.length-1;i++){        
        if (maior < array[i+1]){
            maior = array[i+1];       
            indiceMaior = i+1;  
        }                        
    }
    return indiceMaior;
}

console.log(indiceArray([2, 3, 6, 7, 10, 1, 11, 12, 4, 6, 2]));
console.log(indiceArray([2, 1, 3, 1, 10, 1, 5, 9, 4, 6, 12]));
console.log(indiceArray([12, 3, 6, 7, 10, 1]));
console.log(indiceArray([2, 3]));