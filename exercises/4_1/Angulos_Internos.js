let angulo1 = 90;
let angulo2 = 30;
let angulo3 = 30;
let somaAngulos = angulo1 + angulo2 + angulo3;
let resultado = false;


if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
    resultado = false;
    console.log("Angulos de um triangulo não podem ser menor que 0. " + resultado)
} else if (somaAngulos <= 180 && somaAngulos > 0) {
    resultado = true;
    console.log("Os Angulos informados podem representar um triangulo. " + resultado)
} else {
    resultado = false;
    console.log("Os Angulos informados não podem representar um triangulo. " + resultado)
}