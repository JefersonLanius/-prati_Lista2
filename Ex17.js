// Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

const prompt = require('prompt-sync')();

const vetor1 = [];
const vetor2 = [];

for(let i = 0; i < 9; i++){
    
    let name = String(prompt("Digite qual é o seu nome: "));
    vetor1.push(name);

    let idade = parseInt(prompt("Digite qual é sua idade: "));
    vetor2.push(idade);
}
for(let i = 0; i < 9; i++){
    idade = vetor2[i];
    if(idade < 18){
        console.log(`Nome: ${vetor1[i]} Idade: ${vetor2[i]}`);
    }
}