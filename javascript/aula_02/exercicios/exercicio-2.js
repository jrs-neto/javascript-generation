const leia = require("readline-sync");

console.log("Seja bem vindo ao Aplicativo de Cálculo de Notas.");

let nota1 = leia.questionFloat("Digite a primeira nota:");
let nota2 = leia.questionFloat("Digite a segunda nota:");
let nota3 = leia.questionFloat("Digite a terceira nota:");
let nota4 = leia.questionFloat("Digite a quarta nota:");

let calcularMedia = (nota1 + nota2 + nota3 + nota4) / 4;

if (calcularMedia >= 8) {
  console.log(`A aluno foi aprovado com a média: ${calcularMedia.toFixed(1)}`);
} else {
  console.log(`A aluno foi reprovado, pois a média dele é: ${calcularMedia.toFixed(1)}, estando abaixo do esperado.`);
}
