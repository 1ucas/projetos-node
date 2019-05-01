const files = require('./files');

const logToFile = function(filename, content) {
    files.logToFile(filename, content);
};

const logToConsole = function(content) {
    console.log(content);
};

module.exports = {
    logToFile,
    logToConsole
};