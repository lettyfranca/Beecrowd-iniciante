/**
 * Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, 
 * ao utilizar um automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através 
 * de um simples programa. Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) 
 * e a velocidade média durante a mesma (em km/h). Assim, pode-se obter distância percorrida e, em seguida, 
 * calcular quantos litros seriam necessários. Mostre o valor com 3 casas decimais após o ponto.
 * @author Letícia França
 */
let input = require('fs').readFileSync('stdin', 'utf-8');
let dados = input.split('\n');

let tempo = parseInt(dados.shift());
let vm = parseInt(dados.shift());

let totalKm = vm * tempo;
let totalLitros = totalKm / 12;

console.log(totalLitros.toFixed(3));
