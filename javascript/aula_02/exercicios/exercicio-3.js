const leia = require("readline-sync");

console.log("Seja bem vindo ao Aplicativo de Cálculo de Salário.");

let salarioBruto = leia.questionFloat("Digite o valor do Salario Bruto:");
let adicionalNoturno = leia.questionFloat("Digite o valor do Adicional Noturno:");
let horasExtras = leia.questionFloat("Digite o valor das Horas Extras:");
let descontos = leia.questionFloat("Digite o valor dos Descontos:");

let somaSalarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

const formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

console.log("O valor do Salário Líquido é: ", formatador.format(somaSalarioLiquido));