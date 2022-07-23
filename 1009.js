/**
 * Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.
 * @author Letícia França
 */

let input = require('fs').readFileSync('stdin', 'utf-8');
let dados = input.split("\n");

let nome = dados.shift();
let salFixo = parseFloat(dados.shift());
let tVendas = parseFloat(dados.shift()) * 0.15;

console.log("TOTAL = R$ " + (salFixo + tVendas).toFixed(2));



