/**
 * @author Letícia França
 * Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.
 */
let input = require('fs').readFileSync('stdin', 'utf-8');
let valor = input.split('\n');

let n100 = 0;
let n50 = 0;
let n20 = 0;
let n10 = 0;
let n5 = 0;
let n2 = 0;
let n1 = 0;

let n = parseInt(valor.shift());
if (n > 0 && n < 1000000){
    calculoCedulas();
} else {
    console.log("Insira um valor entre 0 e 1000000");
}

function calculoCedulas(){
    while (n >= 100){
        n100++;
        n = n - 100;
    } 
    while (n >= 50){
        n50++;
        n = n - 50;
    } 
    while (n >= 20){
        n20++;
        n = n - 20;
    } 
    while (n >= 10){
        n10++;
        n = n - 10;
    } 
    while (n >= 5){
        n5++;
        n = n - 5;
    } 
    while (n >= 2){
        n2++;
        n = n - 2;
    } 
    while (n >= 1){
        n1++;
        n = n - 1;
    } 

    console.log(n);
    console.log(n100 + " nota(s) de R$ 100,00");
    console.log(n50 + " nota(s) de R$ 50,00");
    console.log(n20 + " nota(s) de R$ 20,00");
    console.log(n10 + " nota(s) de R$ 10,00");
    console.log(n5 + " nota(s) de R$ 5,00");
    console.log(n2 + " nota(s) de R$ 2,00");
    console.log(n1 + " nota(s) de R$ 1,00");
}