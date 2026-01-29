const leia = require("readline-sync");

let numeroPares = 0;
let numerosImpares = 0;

for (let i = 1; i <= 10; i++) {

  let num = leia.questionInt(`Digite o numero ${i} `);

  if (num % 2 === 0) {
    numeroPares++;
  } else {
    numerosImpares++;
  }
}

console.log("\n------------------------------");
console.log(`Total de números pares: ${numeroPares}`);
console.log(`Total de números ímpares: ${numerosImpares}`);