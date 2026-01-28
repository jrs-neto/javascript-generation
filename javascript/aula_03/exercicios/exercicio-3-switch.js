const leia = require("readline-sync");

let saldoBancario = 1000.00;
console.log("======================================");
console.log("     BEM VINDO AO BANCO GENERATION    ");
console.log("======================================");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");
console.log("======================================");
console.log("                                      ");

let numeroOperacao = leia.keyIn("Digite o numero da operacao desejada");

switch (numeroOperacao) {
  case "1":
    console.log("\nOperação - Saldo");
    console.log(`Seu saldo é de R$ ${saldoBancario.toFixed(2)}`);
    break;

  case "2":
    console.log("\nOperação - Saque");
    let valorSaque = leia.questionFloat("Valor: R$ ");

    if (valorSaque <= saldoBancario) {
      saldoBancario -= valorSaque;
      console.log(`Novo Saldo: R$ ${saldoBancario.toFixed(2)}`);
    } else {
      console.log("Saldo Insuficiente!");
    }
    break;

  case "3":
    console.log("\nOperação - Depósito");
    let valorDeposito = leia.questionFloat("Valor: R$ ");
    saldoBancario += valorDeposito;
    console.log(`Novo Saldo: R$ ${saldoBancario.toFixed(2)}`);
    break;

  default:
    console.log("\nOperação Inválida!");
}