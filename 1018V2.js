/**
 * @author Letícia França
 * Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.
 */
let input = require('fs').readFileSync('stdin', 'utf-8');
let valor = input.split('\n');

let n100 = parseInt(0);
let n50 = parseInt(0);
let n20 = parseInt(0);
let n10 = parseInt(0);
let n5 = parseInt(0);
let n2 = parseInt(0);
let n1 = parseInt(0);
let resto = parseInt(0);

let n = parseInt(valor.shift());
if (n > 0 && n < 1000000){
    calculoCedulas();
} else {
    console.log("Insira um valor entre 0 e 1000000");
}

function calculoCedulas(){
    n100 = parseInt(n/100);
    resto = n % 100;

    n50 = parseInt(resto/50);
    resto = resto % 50;

    n20 = parseInt(resto/20);
    resto = resto % 20;

    n10 = parseInt(resto/10);
    resto = resto % 10;

    n5 = parseInt(resto/5);
    resto = resto % 5;

    n2 = parseInt(resto/2);
    resto = resto % 2;

    n1 = resto;

    console.log(n);
    console.log(n100 + " nota(s) de R$ 100,00");
    console.log(n50 + " nota(s) de R$ 50,00");
    console.log(n20 + " nota(s) de R$ 20,00");
    console.log(n10 + " nota(s) de R$ 10,00");
    console.log(n5 + " nota(s) de R$ 5,00");
    console.log(n2 + " nota(s) de R$ 2,00");
    console.log(n1 + " nota(s) de R$ 1,00");
}