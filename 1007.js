let input = require('fs').readFileSync('stdin', 'utf-8');
let numeros = input.split("\n");

let a = parseInt(numeros.shift());
let b = parseInt(numeros.shift());
let c = parseInt(numeros.shift());
let d = parseInt(numeros.shift());

let diferenca = (a*b-c*d);

console.log("DIFERENCA = " + diferenca);