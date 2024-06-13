// Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.


const prompt = require('prompt-sync')();

let kmpretend = parseInt(prompt("Quantos Km você pretende rodar? "));
let vlrpas = 0;
if(kmpretend<=200){
    vlrpas = kmpretend * 0.5;
    console.log(`O valor à ser pago será R$${vlrpas.toFixed(2)}`)
}else{
    vlrpas = kmpretend * 0.45;
    console.log(`O valor à ser pago será R$${vlrpas.toFixed(2)}`)
}

