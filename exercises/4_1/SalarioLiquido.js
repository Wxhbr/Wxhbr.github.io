let salario = 2555.55;

function salarioLiquido (SalarioBruto, AliquotaInss, AliquotaIR){    
    
return (SalarioBruto - AliquotaInss - AliquotaIR);

}

function inssAliquota (SalarioBruto){

    if (SalarioBruto <= 1556.94){
        return (SalarioBruto * 0.08);
    } else if (SalarioBruto >= 1556.95 && SalarioBruto <= 2594.92){
        return (SalarioBruto * 0.09);
    } else if (SalarioBruto >= 2594.93 && SalarioBruto <= 5189.82){
        return (SalarioBruto * 0.11);
    } else if (SalarioBruto >= 5189.82){
        return (570.88);
    }
    
}

function irAliquota (SalarioBruto){

    if (SalarioBruto >= 1903.99 && SalarioBruto <= 2826.65){
        return (142.80);
    } else if (SalarioBruto >= 2826.66 && SalarioBruto <= 3751.05){
        return (354.80);
    } else if (SalarioBruto >= 3751.06 && SalarioBruto <= 4664.68){
        return (636.13);
    } else if (SalarioBruto >= 4664.68){
        return (869.36);
    }

    return (0);
}

console.log("O salario liquido a ser recebido será de : " + (salarioLiquido(salario, inssAliquota(salario), irAliquota(salario))).toFixed(2));