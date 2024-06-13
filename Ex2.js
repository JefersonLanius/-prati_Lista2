
// . Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h
// , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.


const prompt = require('prompt-sync')();

let velocidade = parseInt(prompt("Qual a velocidade média do seu carro?"));

if(velocidade>80){
    let velocidade_exc = velocidade - 80;
    let multa = velocidade_exc * 5;

    console.log(`Como você ultrapassou a velocidade permitida, terá uma multa de R$${multa.toFixed(2)} para pagar`);
} else{
    console.log(`Não haverá multa para pagar`);
}

