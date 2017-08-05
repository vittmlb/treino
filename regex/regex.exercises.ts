import { RegexExercises } from "../_ex/exercises";
import * as data from '../_data/_regex/regex.raw.data';

let ex: Array<any> = [];


ex.push(new RegexExercises(data.regex_1));
ex.push(new RegexExercises(data.regex_2));
ex.push(new RegexExercises(data.regex_3));
ex.push(new RegexExercises(data.regex_4));
ex.push(new RegexExercises(data.regex_5));
ex.push(new RegexExercises(data.regex_6));
ex.push(new RegexExercises(data.regex_7));
ex.push(new RegexExercises(data.regex_8));

export const value: any = ex;