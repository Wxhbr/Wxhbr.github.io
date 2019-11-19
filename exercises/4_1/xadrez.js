var pecaInformada = "DAMA";
var pecaInformadaLC = pecaInformada.toLowerCase();

switch (pecaInformadaLC){
    case "rei":
        console.log ("Qualquer Direcao, 1 casa");
        break;
    case "dama":
        console.log ("Qualquer Direcao, Quantas casas quiser");
        break;
    case "torre":
        console.log ("Horizontal/Vertical, Quantas casas quiser");
        break;
    case "bispo":
        console.log ("Diagonal, Quantas casas quiser");
        break;
    case "cavalo":
        console.log ("Movimento em L");
        break;
    case "peao":
        console.log ("Sempre pra frente, 2 casas na primeira rodada e 1 nas seguintes");
        break;
    default:
        console.log ("ERRO:Peca invalida");
}