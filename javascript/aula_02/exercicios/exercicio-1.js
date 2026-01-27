const leia = require("readline-sync");

console.log("Bem vindo ao Aplicativo de Cálculo de Salário.");

let salario;
let confirmaSalario = false;

while (!confirmaSalario) {
  salario = leia.questionFloat("Digite o valor do Salario:")
  confirmaSalario = leia.keyInYN(`O valor digitado foi de: R$ ${salario.toFixed(2)}. Esta coreto?`)
}

let abonoSalarial;
let confirmaAbono = false;

while (!confirmaAbono) {
  abonoSalarial = leia.questionFloat("Digite o valor do Abono Salarial: ")
  confirmaAbono = leia.keyInYN(`O valor digitado foi de: R$ ${abonoSalarial.toFixed(2)}. Esta correto?`)
}

let novoSalario = salario + abonoSalarial;

console.log("O valor do novo Salário é: ",
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(novoSalario)
);

//Resolução Anterior

// let salario = leia.questionFloat("Digite o Salario:");
// console.log(`O valor digitado foi de: R$ ${salario.toFixed(2)}`);

// let abonoSalarial = leia.questionFloat("Digite o valor do Abono Salarial:")
// console.log(`O valor digitado foi de: R$ ${abonoSalarial.toFixed(2)}`);

// let novoSalario = salario + abonoSalarial;


// console.log("O valor do novo Salário é: ",
//   new Intl.NumberFormat('pt-BR', {
//     style: 'currency',
//     currency: 'BRL',
//   }).format(novoSalario)
// );

