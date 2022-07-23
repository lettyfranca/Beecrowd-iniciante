let input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split("\n");

let a = parseFloat(valores.shift());
let b = parseFloat(valores.shift());

let media = ((a * 3.5) + (b * 7.5)) / 11;

console.log("MEDIA = " + media.toFixed(5));
