import { JsExercises, RegexExercises } from "../_ex/exercises";
import * as js_data from './_jscookbook/jscookbook.raw.data';
import * as regex_data from './_regex/regex.raw.data';

export enum ArrayTypes {
    jsCookBook,
    regexExercises
}

export function generateArray(type: ArrayTypes): any {
    switch (type) {
        case ArrayTypes.jsCookBook:
            return generateJsCookBookExerciseArray();
        case ArrayTypes.regexExercises:
            return generateRegexExerciseArray();
    }
}

function generateJsCookBookExerciseArray(): Array<JsExercises> {

    let ex_js: Array<JsExercises> = [];

    ex_js.push(new JsExercises(js_data.js_2_3_1));
    ex_js.push(new JsExercises(js_data.js_2_3_2));
    ex_js.push(new JsExercises(js_data.js_2_3_3));
    ex_js.push(new JsExercises(js_data.js_2_3_4));

    return ex_js;

}

function generateRegexExerciseArray(): Array<RegexExercises> {

    let ex_regex: Array<RegexExercises> = [];

    ex_regex.push(new RegexExercises(regex_data.regex_1));
    ex_regex.push(new RegexExercises(regex_data.regex_2));
    ex_regex.push(new RegexExercises(regex_data.regex_3));
    ex_regex.push(new RegexExercises(regex_data.regex_4));
    ex_regex.push(new RegexExercises(regex_data.regex_5));
    ex_regex.push(new RegexExercises(regex_data.regex_6));
    ex_regex.push(new RegexExercises(regex_data.regex_7));
    ex_regex.push(new RegexExercises(regex_data.regex_8));

    return ex_regex;

}

export function generateExercise(): JsExercises {
    let aux = generateArray(ArrayTypes.jsCookBook);
    return aux[1];
}

