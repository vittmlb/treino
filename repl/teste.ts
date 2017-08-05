import { generateArray, generateExercise, ArrayTypes } from "../_data/data.file";
import { ReplTests } from "../_ex/tests";

let prova;

function criaProva(NumberQuestions: number): any {
    return new ReplTests(NumberQuestions);
}

prova = criaProva(4);


// next() / printQ() / get info / set ans(value)

let aux;
let main;
let ans;