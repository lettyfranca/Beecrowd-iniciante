/**
 * Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula.
 * @author Letícia França
 */
let input = require('fs').readFileSync('stdin', 'utf-8');
let lines = input.split('\n');

let p1 = lines.shift().split(' ');
let p2 = lines.shift().split(' ');

let x1 = parseFloat(p1[0]);
let y1 = parseFloat(p1[1]);

let x2 = parseFloat(p2[0]);
let y2 = parseFloat(p2[1]);

/*let ponto1 = (x2-x1) * (x2-x1);
let ponto2 = (y2-y1) * (y2-y1);*/

let distancia = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
console.log(distancia.toFixed(4));
