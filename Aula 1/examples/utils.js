console.log('utils.js');

let name = 'lucas';

const add = function(a, b) {
    return a + b;
};

const add2 = (a, b) => a + b;

module.exports = { name, add, add2 }; // ES6 => igual a { name: name }