const fs = require('fs');

// Leitura Síncrona

let conteudo = fs.readFileSync('./examples/arquivo.txt', 'utf-8');

console.log(conteudo);

// Arquivos Desafio

fs.appendFileSync('./examples/arquivo2.txt', `${conteudo} - 2\n`, {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file

let conteudo2 = fs.readFileSync('./examples/arquivo2.txt', 'utf-8');

console.log(conteudo2);

const logToFile = (nomeArquivo, conteudo) => fs.appendFileSync(nomeArquivo, `${conteudo}\n`, {'flags': 'a'});

module.exports = {
    logToFile
};