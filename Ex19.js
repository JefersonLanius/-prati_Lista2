// . Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')();

function validarHorario(horario) {
    const regex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    return regex.test(horario);
}

function lerHorarios() {
    let horarios = [];
    for(let i = 0; i < 5; i++) {
        let horario = prompt("Digite um horário no formato HH:MM:SS");
        while(!validarHorario(horario)) {
            horario = prompt("Horário inválido. Digite novamente no formato HH:MM:SS");
        }
        horarios.push(horario.replace(/:/g, '.'));
    }
    return horarios;
}

console.log(lerHorarios());
