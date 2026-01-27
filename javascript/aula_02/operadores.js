"use strict"
/* 
Soma e usado para concatenação de strings +
Subtração -
Multiplicação - *
Divisão /
Potenciação - **
Módulo ou Resto - %
*/

let nome = 'José';
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.90;
const bonus = 0.05;

console.log("Salário Liquído: ",
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(salarioBruto + (bonus * salarioBruto))
);