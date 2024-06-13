// . Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require('prompt-sync')();

let typeofcar = prompt("Escolha o tipo de carro que você utilizou: P-Popular L-Luxo ");
let kmrod = 0;
let daywithcar = 0;
let vlrtot = 0;

if(typeofcar == "P" || typeofcar == "p" || typeofcar == "L" || typeofcar == 'l'){
    daywithcar = parseInt(prompt("Quantos dias você ficou com o carro? "));
    kmrod = parseInt(prompt("Quantos foram rodados? "));
    if(typeofcar == "P" || typeofcar == "p"){
        vlrtot = 90 * daywithcar;
        if(kmrod <100){
            vlrtot = vlrtot + (0.2*kmrod);
        }else{vlrtot = vlrtot + (0.1*kmrod);}
    }else{
        vlrtot = 150 * daywithcar;
        if(kmrod <100){
            vlrtot = vlrtot + (0.3*kmrod);
        }else{vlrtot = vlrtot + (0.25*kmrod);}
    }
   console.log(`o valor total do aluguel é R$${vlrtot.toFixed(2)}`);

}else{
    console.log(`Tipo de carro escolhido não existe!`);
}