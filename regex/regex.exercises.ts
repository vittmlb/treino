import { RegexExercises } from "../_ex/exercises";
import * as data from './regex.raw.data';

let ex: Array<any> = [];


ex.push(new RegexExercises(data.regex_1));
ex.push(new RegexExercises(data.regex_2));
ex.push(new RegexExercises(data.regex_3));
ex.push(new RegexExercises(data.regex_4));

export const value: any = ex;

export function find(elem: string): RegexExercises {
    for(let i = 0; i < ex.length; i++) {
        if(ex[i].id === elem) {
            return ex[i];
        }
    }
    return new RegexExercises(ex);
}