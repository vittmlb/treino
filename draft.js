let t = require('./_ex/exercises');
let globals = require('./globals/globals');
// console.log(globals.appGlobals.exercise.info);
let aux = globals.appGlobals.exercise.info.slice();
// let aux = answer.slice();

aux.splice(aux.lastIndexOf('cat'), 1, 'slavost');


globals.appGlobals.answer =  aux;


