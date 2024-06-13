// . Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.
const prompt = require('prompt-sync')();

let funcionario;
let nome, cargo, salario;



function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}

function lerRegistro(funcionario) {
    console.log("Nome: " + funcionario.nome);
    console.log("Cargo: " + funcionario.cargo);
    console.log("Salário: " + funcionario.salario);
}

nome = String(prompt("Qual o nome da pessoa: "));
cargo = String(prompt("Qual o cargo da pessoa: "));
salario = parseInt(prompt("Qual o salario da pessoa: "));

funcionario = new Funcionario(nome, cargo, salario);

lerRegistro(funcionario);
