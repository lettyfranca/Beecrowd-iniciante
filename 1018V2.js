/**
 * @author Letícia França
 * Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.
 */
let input = require('fs').readFileSync('stdin', 'utf-8');
let valor = input.split('\n');