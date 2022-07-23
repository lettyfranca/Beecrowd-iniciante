let input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split("\n");

let v1 = parseInt(valores.shift());
let v2 = parseInt(valores.shift());

let PROD = v1 * v2;
console.log("PROD = " + PROD);