// Interporlações de String
const count = 5;

console.log('count: %d', count);

console.log('count:', count);

console.log(`count: ${count}`);

// Calcular Timer 1 - Não thread safe
let dateInicio = new Date();

for(let i=0; i<1000000; i++);

let dataFinal = new Date();

let computacao = dataFinal.getMilliseconds() - dateInicio.getMilliseconds();

console.log(`Contabilização: ${computacao}ms`);

// Calcular Timer 2 - Thread safe
console.time('tempo');

for(let j=0; j<1000000; j++);

console.timeEnd('tempo');