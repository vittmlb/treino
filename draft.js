let t = require('./_ex/exercises');
let globals = require('./globals/globals');
let aux = globals.appGlobals.exercise.info.slice();
// let aux = answer.slice();

let pattern = /(\d{3})/;
let results = [];

aux.forEach(function (v) {
    let z = pattern.exec(v);
    if(z) results.push(z[1]);
});

aux = results;



globals.appGlobals.answer = aux;


