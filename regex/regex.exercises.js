"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercises_1 = require("../_ex/exercises");
const data = require("./regex.raw.data");
let ex = [];
ex.push(new exercises_1.RegexExercises(data.regex_1));
ex.push(new exercises_1.RegexExercises(data.regex_2));
ex.push(new exercises_1.RegexExercises(data.regex_3));
ex.push(new exercises_1.RegexExercises(data.regex_4));
ex.push(new exercises_1.RegexExercises(data.regex_5));
ex.push(new exercises_1.RegexExercises(data.regex_6));
ex.push(new exercises_1.RegexExercises(data.regex_7));
ex.push(new exercises_1.RegexExercises(data.regex_8));
exports.value = ex;
function find(elem) {
    for (let i = 0; i < ex.length; i++) {
        if (ex[i].id === elem) {
            return ex[i];
        }
    }
    return new exercises_1.RegexExercises(ex);
}
exports.find = find;
