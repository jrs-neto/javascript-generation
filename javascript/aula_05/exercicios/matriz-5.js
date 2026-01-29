const leia = require('readline-sync');

let matriz = [[], [], []];
let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let linha = 0; linha < 3; linha++) {
  for (let coluna = 0; coluna < 3; coluna++) {
    matriz[linha][coluna] = leia.questionInt(`Digite o valor de [${linha}][${coluna}]: `);
  }
}

for (let i = 0; i < 3; i++) {
  diagonalPrincipal.push(matriz[i][i]);
  somaPrincipal += matriz[i][i];

  diagonalSecundaria.push(matriz[i][2 - i]);
  somaSecundaria += matriz[i][2 - i];
}

console.log("\nElementos da Diagonal Principal:");
console.log(diagonalPrincipal.join(" "));

console.log("\nElementos da Diagonal Secundaria:");
console.log(diagonalSecundaria.join(" "));

console.log(`\nSoma dos Elementos da Diagonal Principal: ${somaPrincipal}`);
console.log(`Soma dos Elementos da Diagonal Secundaria: ${somaSecundaria}`);