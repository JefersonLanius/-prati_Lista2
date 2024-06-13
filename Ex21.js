// . Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require('prompt-sync')();

let Sexo = String(prompt("Qual é o seu sexo? H/M "));
let altura = parseFloat(prompt("Qual é sua altura? "));
let pesoideal = 0;
if(Sexo === "M" || Sexo === "m"){
    pesoideal = 62.1 * altura - 44.7;
    console.log(`O seu peso ideal é ${pesoideal.toFixed(3)}`);
} else if(Sexo === "H" || Sexo === "h"){
    pesoideal = 72.7 * altura - 58;
    console.log(`O seu peso ideal é ${pesoideal.toFixed(3)}`);
} else{
    console.log(`Sexo digitado é inválido`);
}