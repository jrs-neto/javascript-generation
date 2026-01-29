const leia = require("readline-sync");

// // Definindo a matriz (quantidade de linhas)
// let matriz = new Array(2);

// //Adicionando as linahs da matriz(colunas)
// for (let indice = 0; indice < matriz.length; indice++) {
//   matriz[indice] = Array(3);
// }

// // Entrada de dados da matriz via teclado
// for (let linha = 0; linha < matriz.length; linha++) {
//   for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
//     matriz[linha][coluna] = leia.questionInt(`Matriz [${linha}][${coluna}] =`)
//   }
// }

// // Exibir os dados
// console.table(matriz);

// ------------Segndo Método--------------- //

// Entrada de dados da matriz via teclado
let matriz = Array.from({ length: 2 }, () =>
  Array.from({ length: 3 },
    () => leia.questionInt("Digite um numero: ")));

// Exibir os dados
console.table(matriz);