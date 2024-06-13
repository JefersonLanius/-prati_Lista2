// Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.

let i =0;
let number1 = 0;
let number2 = 1;
let number3 = 0;

for(i = 0; i < 10; i++){
    console.log(`${number3}`);
    if(i===1){
        number3 = number2;    
    }else{
    number3 = number1 + number2;}
    number1 = number2;
    number2 = number3;
}
