const leia = require("readline-sync");
console.log("Bem vindo, digite os números para calcular a diferença.");

let numero1 = leia.questionFloat("Digite o primeiro numero:");
let numero2 = leia.questionFloat("Digite o segundo numero:");
let numero3 = leia.questionFloat("Digite o terceiro numero:");
let numero4 = leia.questionFloat("Digite o quarto numero:");

let calculoDaDiferenca = (numero1 * numero2) - (numero3 * numero4);

console.log(`A Diferença entre os números é de: ${calculoDaDiferenca}`);