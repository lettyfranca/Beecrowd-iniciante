//requise = usado para fazer requisição de módulos
//readFileSync = método para ler arquivos
//o split quebra a string de acordo com o que colocamos dentro dele, por exemplo, espaços
let input = require('fs').readFileSync('stdin', 'utf8');

let n = 3.14159;
let raio = parseFloat(input);

let area = n * Math.pow(raio, 2);

console.log("A=" + area.toFixed(4));