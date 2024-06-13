// Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.


const prompt = require('prompt-sync')();

let side1 = parseInt(prompt("Digite um valor inteiro para o lado 1 do triângulo: "));
let side2 = parseInt(prompt("Digite um valor inteiro para o lado 2 do triângulo: "));
let side3 = parseInt(prompt("Digite um valor inteiro para o lado 3 do triângulo: "));

if((side1 >= (side2 + side3)) || ( side2 >= (side1 + side3)) || side3 >= (side2 + side1)){
    console.log(`Com os valor digitados não é possível formar um triângulo`);
}else {
    console.log(`Com os valor digitados é possível formar um triângulo`);
}