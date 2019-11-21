function indiceArray (array){
    let indiceMenor = 0;
    let menor = array[0];    
    for (i=0;i<array.length-1;i++){        
        if (menor > array[i+1]){
            menor = array[i+1];       
            indiceMenor = i+1;  
        }                        
    }
    return indiceMenor;
}

console.log(indiceArray([2, 3, 6, 7, 10, 1, 11, 12, 4, 6, 2]));
console.log(indiceArray([2, 1, 3, 1, 10, 1, 5, 9, 4, 6, 12]));
console.log(indiceArray([12, 3, 6, 7, 10, 1]));
console.log(indiceArray([2, 3]));