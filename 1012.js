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
let area = lines.shift().split(" ");

let a = parseFloat(area[0]);
let b = parseFloat(area[1]);
let c = parseFloat(area[2]);
let pi = 3.14159;

let areaTRetangulo = (a * c) / 2.0;
let areaCirculo = pi * Math.pow(c,2);
let areaTrapezio = ((a+b)*c) / 2.0;
let areaQuadrado = Math.pow(b,2);
let areaRetangulo = a * b;

console.log("TRIÂNGULO: " + areaTRetangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));

