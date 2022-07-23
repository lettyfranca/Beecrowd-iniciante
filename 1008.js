let input = require('fs').readFileSync('stdin', 'utf-8');
let dados = input.split("\n");

let nfun = parseInt(dados.shift());
let nhoras = parseInt(dados.shift());
let vhora = parseFloat(dados.shift());

let salario = nhoras * vhora;

console.log("NUMBER = " + nfun + "\nSALARY = U$ " + salario.toFixed(2));
