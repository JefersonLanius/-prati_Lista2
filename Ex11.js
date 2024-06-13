// . Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
//     Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
//     valores da sequência.
    
const prompt = require('prompt-sync')();
let i =0;
let sumnumber = 0;
let number = parseInt(prompt("Digite qual é o primeiro número da Progressão aritimética: "));
let razao = parseInt(prompt("Qual a razão entre os números da PA: "));

for(i = 0; i < 10; i++){
    console.log(`${number}`);
    sumnumber+=number;
    number+=razao;
    
}
console.log(`A soma de todos os valores da PA é: ${sumnumber}`);