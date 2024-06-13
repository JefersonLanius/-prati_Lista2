// Crie um programa que preencha automaticamente (usando lógica, não apenas
//     atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
//     da sequência de Fibonacci.

let i =0;
let number1 = 0;
let number2 = 1;
let number3 = 0;
var sequence = [];

for(i = 0; i < 15; i++){
    console.log(`${number3}`); 
    if(i===1){
        number3 = number2;    
    }else{
    number3 = number1 + number2;}
    sequence.push(number3);
    number1 = number2;
    number2 = number3;
}
console.log(sequence);
