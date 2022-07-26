/**
 * @author Letícia França
 * Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
 */
let input = require('fs').readFileSync('stdin', 'utf-8');
let segundos = input.split('\n');
