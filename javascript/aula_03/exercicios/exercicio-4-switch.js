const leia = require("readline-sync");


console.log("======================================");
console.log("1 - Gerente");
console.log("2 - Vendedor");
console.log("3 - Supervisor");
console.log("4 - Motorista");
console.log("5 - Estoquista");
console.log("6 - Técnico de TI");
console.log("======================================");

let nomeColaborador = leia.question("Digite o nome do colaborador:")
let codigoCargoColaborador = leia.questionInt("Digite o codigo do cargo do colaborador:");
let salarioColaborador = leia.questionFloat("Digite o salario do colaborador:");

let nomeCargo = "";
let reajuste = 0;

switch (codigoCargoColaborador) {
  case 1:
    nomeCargo = 'Gerente';
    reajuste = 0.10;
    break;
  case 2:
    nomeCargo = 'Vendedor';
    reajuste = 0.07;
    break;
  case 3:
    nomeCargo = 'Supervisor';
    reajuste = 0.09;
    break;
  case 4:
    nomeCargo = 'Motorista';
    reajuste = 0.06;
    break;
  case 5:
    nomeCargo = 'Estoquista';
    reajuste = 0.05;
    break;
  case 6:
    nomeCargo = 'Técnico de TI';
    reajuste = 0.08;
    break;
}

let novoSalario = salarioColaborador + (reajuste * salarioColaborador);

console.log("\n=====================================");
console.log(`Nome do Colaborador: ${nomeColaborador}`);
console.log(`Cargo: ${nomeCargo}`);
console.log(`Salário reajustado: R$ ${novoSalario.toFixed(2)}`);