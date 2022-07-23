/**
 * Timelimit: 1
 * Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”.
 * @author Letícia França
 */
let input = require('fs').readFileSync('stdin', 'utf-8');
let lines = input.split('\n');
let valor = lines.shift().split(' ');

let a = parseInt(valor[0]); 
let b = parseInt(valor[1]); 
let c = parseInt(valor[2]);

let maiorAB = (a+b+Math.abs(a-b)) / 2;
let maior = (maiorAB+c+Math.abs(maiorAB-c)) / 2;

console.log(maior + " eh o maior");

