exports.b = 8;
let array = [];
exports.z = function() {
    return array;
};

let Mocha = require('mocha');
let fs = require('fs');
let path = require('path');

let mocha = new Mocha();

mocha.addFile("teste.js");


array = ['dog', 'cat', 'walrus', 'lion', 'cat'];


mocha.run(function (failures) {
    process.on('exit', function () {
        process.exit(failures);
    });
});