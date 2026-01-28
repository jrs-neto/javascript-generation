const leia = require("readline-sync");

let numeroA = leia.questionFloat("Digite o numero A: ", { limitMessage: 'Digite um numero float' });
let numeroB = leia.questionFloat("Digite o numero B: ", { limitMessage: 'Digite um numero float' });
let numeroC = leia.questionFloat("Digite o numero C: ", { limitMessage: 'Digite um numero float' });

if (numeroA + numeroB > numeroC) {
  console.log("A Soma de A + B é Maior do que C");
} else if (numeroA + numeroB < numeroC) {
  console.log("A Soma de A + B é Menor do que C");
} else {
  console.log("A Soma de A + B é Igual a C");
}