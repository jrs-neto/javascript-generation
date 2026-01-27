"use strict"
let nome = 'José';
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.90;
const bonus = 0.05;

let numero = 10;

console.log("O tipo da variável nome é: ", typeof (nome));
console.log("O tipo da numero nome é: ", typeof (numero));

if (salarioBruto > 1000) {
  let mensagem = "Salário > 1000"
  console.log(mensagem);
  console.log(bonus);
}