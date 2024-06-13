// Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.


const prompt = require('prompt-sync')();

let numbersort = parseInt((Math.random()*(5-1)+1));


let numberdig = parseInt(prompt("Digite um número de 1 a 5 e e tente adivinhar o número sorteado: "))
if(numberdig===numbersort){
    console.log(`Parabéns! você acertou o número.`)
} else{
    console.log(`Que pena! você errou, não foi dessa vez.`)
}
console.log(`O número sorteado era ${numbersort}`);
