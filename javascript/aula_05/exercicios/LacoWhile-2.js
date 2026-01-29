const leia = require('readline-sync');

let menores21 = 0;
let maiores50 = 0;

console.log("--- Verificador de Idades ---");

let idade = leia.questionInt("Digite uma idade: ");

while (idade >= 0) {

  if (idade < 21) {
    menores21++;
  } else if (idade > 50) {
    maiores50++;
  }

  idade = leia.questionInt("Digite uma idade: ");
}

console.log("\n---------------------------------------");
console.log(`Total de pessoas menores de 21 anos: ${menores21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiores50}`);