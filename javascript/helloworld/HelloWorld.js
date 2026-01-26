const leia = require("readline-sync");

// let mensagem = leia.question("Digite uma mensagem: ")
// let mensagem = "Hello, World!";
// mensagem = "A Turma JS13 é TOP!"; // Pode reatribuir o valor

// const mensagem = "Hello, World!";
// mensagem = "A Turma JS13 é TOP!"; // Não pode reatribuir o valor
// console.log(mensagem);

let numero1 = leia.questionInt("Digite o primeiro número")
let numero2 = leia.questionInt("Digite o segundo número")

let soma = numero1 + numero2;
console.log("Soma: ", soma);


