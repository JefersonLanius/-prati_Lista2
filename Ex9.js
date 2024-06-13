// Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.


const prompt = require('prompt-sync')();
let continuar = "S";
let sexOfPerson = ' ';
let numberOfMen = 0;
let numberOfWoman = 0;
let salaryOfWoman = 0;
let totsalaryWoman = 0;
let salaryOfMen = 0;
let totsalaryMen = 0;

while (continuar === "S" || continuar === "s"){
   sexOfPerson = String(prompt("A pessoa é Homem(H) ou Mulher(M) "));
   if(sexOfPerson === "h" || sexOfPerson === "H"){
        numberOfMen++;
        salaryOfMen = parseFloat(prompt("Qual o valor do salário deste funcionário? "));
        totsalaryMen = totsalaryMen + salaryOfMen;
   }else if (sexOfPerson === "m" || sexOfPerson === "M"){
        numberOfWoman++;
        salaryOfWoman = parseFloat(prompt("Qual o valor do salário deste funcionário? "));
        totsalaryWoman = totsalaryWoman + salaryOfWoman;
   }
   continuar = prompt("Deseja continuar? S/N ");

}

console.log(`Temos um total de ${numberOfMen} homens, com um salário total de R$${totsalaryMen.toFixed(2)};`)
console.log(`Temos um total de ${numberOfWoman} mulheres, com um salário total de R$${totsalaryWoman.toFixed(2)};`)