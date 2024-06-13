// . Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.
const prompt = require('prompt-sync')();

var nomes = [];

for (let i = 0; i < 7; i++) {
    let nome = prompt("Digite um nome:");
    nomes.push(nome);
}

for (let j = nomes.length-1; j >= 0; j--) {
    console.log(nomes[j]);
}