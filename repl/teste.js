"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tests_1 = require("../_ex/tests");
let prova;
function criaProva(NumberQuestions) {
    return new tests_1.ReplTests(NumberQuestions);
}
prova = criaProva(4);
// next() / printQ() / get info / set ans(value)
let aux;
let main;
let ans;
