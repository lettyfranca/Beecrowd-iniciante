/**
 * Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante de 60 Km/h e o carro Y sai com velocidade constante de 90 Km/h.
 * Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.
 * Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.
 * @author Letícia França
 */
let input = require('fs').readFileSync('stdin', 'utf-8');
let dist = input.split('\n');

let velCarX = 60;
let velCarY = 90;
let distancia = parseInt(dist.shift());

let minutos = (60 * distancia) / 30;

console.log(minutos + " minutos");

/*
X  30  n -> (60 * distancia) / 30
Y  60  ?
*/
