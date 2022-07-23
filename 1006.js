let input = require('fs').readFileSync('stdin', 'utf-8');
let notas = input.split("\n");

let a = parseFloat(notas.shift());
let b = parseFloat(notas.shift());
let c = parseFloat(notas.shift());

let media = ((a*2) + (b*3) + (c*5)) / 10;

console.log("MEDIA = " + media.toFixed(1));