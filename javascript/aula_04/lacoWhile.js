const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero inteiro: ");

// Primeiro testa a condição e depois executa
let contador = 1;
while (contador <= 10) {
  console.log(`${numero} x ${contador} = ${numero * contador}`);
  contador++;
}
