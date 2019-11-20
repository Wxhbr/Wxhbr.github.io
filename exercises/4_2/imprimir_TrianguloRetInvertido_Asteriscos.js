let n = 5;
let stringAsteriscos = "";
let string = "*";
let stringTemp = "";

if (n > 1){
    for (j=0; j < n; j++){
        stringAsteriscos = stringAsteriscos + " ";
    }
    console.log ("O valor escolhido é : " + n + "\n");
    for (i = n; i >= 1; i--){    
        if ( i < n){
            stringTemp = stringTemp.slice (0, i-1) + string + stringTemp.slice (i);
        } else {
            stringTemp = stringAsteriscos.slice(0, i-1) + string;
        }
        console.log (i + " - " + stringTemp);                             
    }     
} else {
    console.log ("ERRO:Valor de n é inválido. Precisa ser maior que 1.")
}