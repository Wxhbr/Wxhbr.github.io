let n = 5;
let string = "";
let metade_n = Math.floor(n/2);

function MontarStringVazia (string, tamanho){
    for (i = 0; i < tamanho; i++){
        string = string + " ";
    }
    return string;
}

string = MontarStringVazia(string, n);

if (n > 1){  
    console.log("O valor informado de n é : " + n +"\n");  
    if (n % 2 != 0){
        string = string.slice(0, metade_n) + "*" + string.slice(metade_n+1);
        for (i = 0; i < metade_n; i++){
            console.log(string);           
            string = string.slice(0, metade_n + (-1-i)) + "*" + string.slice(metade_n - i);
            string = string.slice(0, metade_n + (i+1)) + "*" + string.slice(metade_n + (i+2));
        }
        console.log(string);
    } else {
        console.log("Tentativa");
    } 
} else {
    console.log ("ERRO:Valor de n é inválido. Precisa ser maior que 1.")
}