// Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares

const prompt = require('prompt-sync')();

let choseuser = "S";
let number = 0;
let smallnumber = 0;
let bignumber = 0;
let avgnumber = 0;
let qtdnumber = 0;
let parnumber = 0;
let sumnumber = 0;
do{
    number = parseInt(prompt("Digite um número: "));
    sumnumber+=number;
    qtdnumber++
    if(number>bignumber){
        bignumber = number;
    }
    if(number<smallnumber || smallnumber===0){
        smallnumber = number;
    }
    if((number % 2) === 0){
        parnumber++;
    }

    choseuser = String(prompt("Você deseja continuar? S/N "));
    while(choseuser !== "S" && choseuser !== "s" && choseuser !== "n" && choseuser !== "N"){
        choseuser = String(prompt("A opção digitada é inválida, digite novamente: "));
    }

}while(choseuser === "S" || choseuser === "s")

console.log(`A soma de todos os valores é ${sumnumber.toFixed(0)}`);
console.log(`O menor valor digitado é ${smallnumber}`);
console.log(`O maior valor digitado é ${bignumber}`);
console.log(`A média de todos os valores é ${(sumnumber/qtdnumber).toFixed(2)}`);
console.log(`A quantidade de números pares digitado é ${parnumber}`);