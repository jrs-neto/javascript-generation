const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero inteiro: ");

// Primeiro ele executa pelo menos uma vez e só depois ele testa a condição.
let contador = 1;
// let contador = 11;
do {
  console.log(`${numero} x ${contador} = ${numero * contador}`);
  contador++;
} while (contador <= 10);

