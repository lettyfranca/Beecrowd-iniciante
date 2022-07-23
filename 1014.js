/**
 * Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).
 * @author Letícia França
 */
let input = require('fs').readFileSync('stdin', 'utf-8');
let valores = input.split('\n');

let x = parseInt(valores.shift());
let y = parseFloat(valores.shift());

console.log((x/y).toFixed(3) + " km/l");