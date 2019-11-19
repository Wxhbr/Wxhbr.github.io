let porcentagem = 101;

function ConvertPorcentagem (porcentagemNota){

let conceitoNota = "";

    if (porcentagemNota < 0 || porcentagemNota > 100){
        return console.log("ERRO:Porcentagem da nota deve estar entre 0 e 100.");
    } else if (porcentagemNota >= 90){
        conceitoNota = "A";
        return console.log("Vc tirou " + porcentagemNota +"% e sua nota convertida em conceito é: " + conceitoNota);
    } else if (porcentagemNota >= 80) {
        conceitoNota = "B";
        return console.log("Vc tirou " + porcentagemNota +"% e sua nota convertida em conceito é: " + conceitoNota);
    } else if (porcentagemNota >= 70){
        conceitoNota = "C";
        return console.log("Vc tirou " + porcentagemNota +"% e sua nota convertida em conceito é: " + conceitoNota);
    } else if (porcentagemNota >= 60){
        conceitoNota = "D";
        return console.log("Vc tirou " + porcentagemNota +"% e sua nota convertida em conceito é: " + conceitoNota);
    } else if (porcentagemNota >= 50){
        conceitoNota = "E";
        return console.log("Vc tirou " + porcentagemNota +"% e sua nota convertida em conceito é: " + conceitoNota);
    } else if (porcentagemNota < 50){
        conceitoNota = "F";
        return console.log("Vc tirou " + porcentagemNota +"% e sua nota convertida em conceito é: " + conceitoNota);
    }
}

ConvertPorcentagem(porcentagem);
