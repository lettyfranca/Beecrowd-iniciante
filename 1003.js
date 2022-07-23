let input = require('fs').readFileSync('stdin', 'utf8');
let linhas = input.split("\n");

let A = parseInt(linhas.shift());
let B = parseInt(linhas.shift());

let SOMA = A + B;

console.log("SOMA = " + SOMA);