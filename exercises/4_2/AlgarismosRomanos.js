let string = "MCCCLXXXVII";
let arrayAlgarismos = string.split("");
let soma = 0;
let controle = 0;
let MetadeArray = Math.floor(arrayAlgarismos.length/2)
console.log(MetadeArray)

var AlgarismosRomanos = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
};
if (arrayAlgarismos.length % 2 == 0){
    for (i = 0; i < MetadeArray; i++){
        if (AlgarismosRomanos[arrayAlgarismos[controle]] >= AlgarismosRomanos[arrayAlgarismos[controle+1]]){
            soma = soma + (AlgarismosRomanos[arrayAlgarismos[controle]] + AlgarismosRomanos[arrayAlgarismos[controle+1]])
            controle += 2;        
        } else {
            soma = soma + (AlgarismosRomanos[arrayAlgarismos[controle+1]] - AlgarismosRomanos[arrayAlgarismos[controle]]);
            controle += 2; 
        }    
    } 
} else {
    for (i = 0; i <= MetadeArray; i++){
        if (MetadeArray == i){
                soma = soma + AlgarismosRomanos[arrayAlgarismos[controle]];
        } else {
            if (AlgarismosRomanos[arrayAlgarismos[controle]] >= AlgarismosRomanos[arrayAlgarismos[controle+1]]){
                    soma = soma + (AlgarismosRomanos[arrayAlgarismos[controle]] + AlgarismosRomanos[arrayAlgarismos[controle+1]])
                    controle += 2;        
            } else {
                    soma = soma + (AlgarismosRomanos[arrayAlgarismos[controle+1]] - AlgarismosRomanos[arrayAlgarismos[controle]]);
                    controle += 2; 
            } 
        }   
    } 
}
console.log (soma); 

