import { generateArray, generateExercise, ArrayTypes } from "../_data/data.file";
import { ReplTests } from "../_ex/exams";


function criaProva(NumberQuestions: number): any {
    return new ReplTests(NumberQuestions);
}

let p = criaProva(4);

// p.p() / p.nx() / p.info / p.ans = value

let aux;
let main;
