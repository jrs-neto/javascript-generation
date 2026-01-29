const leia = require('readline-sync');

let numero;
let somaPositivos = 0;

console.log("--- Somador de Numeros Positivos (Digite 0 para sair) ---");

do {
  numero = leia.questionInt("Digite um numero: ");

  if (numero > 0) {
    somaPositivos += numero;
  }

} while (numero !== 0);

console.log("\n---------------------------------------");
console.log(`A soma dos numeros positivos é: ${somaPositivos}`);