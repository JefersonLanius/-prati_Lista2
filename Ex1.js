// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.


const prompt = require('prompt-sync')();

let QtdCig = parseInt(prompt("Quantos cigarros você costuma fumar por dia? "));
let QtdYear = parseInt(prompt("A quantos anos que você fuma? "));

let mincig = parseInt((((QtdYear*365)*QtdCig)*10)/1440);
console.log(`Você já perdeu ${mincig} dias da sua vida`);
