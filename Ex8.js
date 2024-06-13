// Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

const prompt = require('prompt-sync')();

let hourexercises = prompt("Quantas horas completas de atividade física você realizou esse mês? ");
let qtdpnts = 0;
let vlrmoney = 0;

if(hourexercises<=10){
    qtdpnts = hourexercises * 2;
} else if (hourexercises<=20){
    qtdpnts = ((hourexercises-10) * 5) + ( 10 * 2 );
}else if (hourexercises > 20){
    qtdpnts = (((hourexercises-20)*10)+(10 * 5) + ( 10 * 2 ));
}

vlrmoney = qtdpnts * 0.05;
console.log (`O valor a receber será R$${vlrmoney.toFixed(2)}`);