"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exams_1 = require("../_ex/exams");
function criaProva(NumberQuestions) {
    return new exams_1.ReplTests(NumberQuestions);
}
let p = criaProva(4);
// p.p() / p.nx() / p.info / p.ans = value
let aux;
let main;
