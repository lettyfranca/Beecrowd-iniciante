/**
 * @author Letícia França
 * Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
 */
let input = require('fs').readFileSync('stdin', 'utf-8');

//entrada dos dados
let segundos = parseInt(input);

//processamento dos dados
let horas, minutos, restoHoras, restoMinutos, restoSegundos;

horas = parseInt(segundos / 3600);
restoHoras = segundos % 3600;

minutos = parseInt(restoHoras / 60);
restoMinutos = restoHoras % 60;

segundos = restoMinutos;

//saída dos dados
console.log(`${horas}:${minutos}:${segundos}`);