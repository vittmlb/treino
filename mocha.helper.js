let Mocha = require('mocha');
let Chai = require('chai');


exports.newMocha = function() {
    return require('./draft').answer();
};


// exports.newMocha = function() {
//     let mocha = new Mocha({
//         ui: 'bdd'
//     });
//     mocha.addFile('./jsCookBook/tt.js');
//     mocha.run(function (failures) {
//         process.on('exit', function () {
//             process.exit(failures);
//         });
//     })
//         .on('test', function() {
//             console.log('on teste');
//         });
//     // mocha.suite.suites = [];
//     // mocha.options.files = [];
//     // mocha.files = [];
//     // delete require.cache[require.resolve('./jsCookBook/test.mocha.js')];
//     // delete require.cache[require.resolve('./draft.js')];
// };
