// Exercícios Iniciais
const utils = require('./examples/utils');
const log = require('./examples/log');
const chalk = require('chalk');
const _ = require('lodash');

const soma = utils.add(2,2);
const soma2 = utils.add2(3,3);

const mensagemAzul = chalk.bold.blue('array sem split');

console.log('app.js');
console.log(utils.name);
console.log(soma);
console.log(soma2);

log.logToFile('./examples/arquivo3.txt', 'conteudo');
log.logToConsole('conteudo');

// Loadash
let arrayToDisplay = _.chunk([1,2,3,4,5,6], 3);
log.logToConsole(arrayToDisplay);

// Chalk
log.logToConsole(mensagemAzul);

// Nodemon
// Deve ser instalado em escopo global porque monitora todos projetos
// Roda usando nodemon app.js
// Toda alteração feita no projeto é recarregada automaticamente
