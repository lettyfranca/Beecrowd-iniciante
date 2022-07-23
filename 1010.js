/**
 * Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.
 * @author Letícia França
 */

let input = require('fs').readFileSync('stdin', 'utf-8');
let dados = input.split("\n");

let infoP1 = dados.shift().split(" ");
let infoP2 = dados.shift().split(" ");

let codP1 = parseInt(infoP1.shift());
let numP1 = parseInt(infoP1.shift());
let valP1 = parseFloat(infoP1.shift());

let codP2 = parseInt(infoP2.shift());
let numP2 = parseInt(infoP2.shift());
let valP2 = parseFloat(infoP2.shift());

let total = (numP1 * valP1) + (numP2 * valP2);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));