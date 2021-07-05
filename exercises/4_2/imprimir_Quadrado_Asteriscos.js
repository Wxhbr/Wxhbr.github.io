let n = 5;
let stringAsteriscos = "";

if (n > 1){
    console.log ("O valor escolhido é : " + n + "\n");
    for (i = 1; i <= n; i++){        
        for (j=0; j < n; j++){

            stringAsteriscos = stringAsteriscos + "*"

        }
        console.log (i + " - " + stringAsteriscos);
        stringAsteriscos = "";
    }  
} else {
    console.log ("ERRO:Valor de n é inválido. Precisa ser maior que 1.")
}

