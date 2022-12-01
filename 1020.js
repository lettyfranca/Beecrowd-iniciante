/**
 * @author Letícia França
 * Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias
Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. 
Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. 
Este é apenas um exercício com objetivo de testar raciocínio matemático simples.
 */

let input = require('fs').readFileSync('stdin', 'utf-8');

//entrada dos dados
let idadeDias = parseInt(input);

//processamento dos dados
let idadeAnos, idadeMeses;
idadeAnos = parseInt(idadeDias / 365);
idadeDias = idadeDias % 365;

idadeMeses = parseInt(idadeDias / 30);
idadeDias = idadeDias % 30;

//saída dos dados
console.log(`${idadeAnos} ano(s) 
${idadeMeses} mes(es) 
${idadeDias} dia(s)`);

