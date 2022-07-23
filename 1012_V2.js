/**
 * Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
 * a) a área do triângulo retângulo que tem A por base e C por altura.
 * b) a área do círculo de raio C. (pi = 3.14159)
 * c) a área do trapézio que tem A e B por bases e C por altura.
 * d) a área do quadrado que tem lado B.
 * e) a área do retângulo que tem lados A e B.
 * 
 * @author Letícia França
 */

let input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');
var valor = lines.shift().split(' ');

var A = parseFloat(valor[0]); 
var B = parseFloat(valor[1]); 
var C = parseFloat(valor[2]);

console.log("TRIANGULO: " + parseFloat((A*C)/2).toFixed(3));
console.log("CIRCULO: " + parseFloat(3.14159 * Math.pow(C,2)).toFixed(3)); 
console.log("TRAPEZIO: " + parseFloat(((A + B)/2)*C).toFixed(3)); 
console.log("QUADRADO: " + parseFloat(Math.pow(B,2)).toFixed(3)); 
console.log("RETANGULO: " + parseFloat(A*B).toFixed(3));