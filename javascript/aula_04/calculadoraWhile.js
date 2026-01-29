const leia = require("readline-sync");

let continua = 'S';

while (continua === 'S') {

  console.log("======================================");
  console.log("       CALCULADORA COM WHILE          ");
  console.log("======================================");
  console.log("(+) - Soma                            ");
  console.log("(-) - Subtração                       ");
  console.log("(*) - Multiplicação                   ");
  console.log("(/) - Divisão                         ");
  console.log("======================================");
  console.log("                                      ");

  let numero1 = leia.questionFloat("Digite o primeiro numero: ", { limitMessage: 'Digite um numero float' });
  let numero2 = leia.questionFloat("Digite o segundo numero: ", { limitMessage: 'Digite um numero float' });

  let operacao = leia.keyIn("Digite a operacao: ");

  switch (operacao) {
    case "+":
      console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
      break;
    case "-":
      console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
      break;
    case "*":
      console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
      break;
    case "/":
      console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
      break;
    default:
      console.log("Operação Inválida!");
  }

  continua = leia.keyIn("Deseja continuar (S/N)").toUpperCase();

}