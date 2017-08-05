"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercises_1 = require("../_ex/exercises");
const js_data = require("./_jscookbook/jscookbook.raw.data");
const regex_data = require("./_regex/regex.raw.data");
var ArrayTypes;
(function (ArrayTypes) {
    ArrayTypes[ArrayTypes["jsCookBook"] = 0] = "jsCookBook";
    ArrayTypes[ArrayTypes["regexExercises"] = 1] = "regexExercises";
})(ArrayTypes = exports.ArrayTypes || (exports.ArrayTypes = {}));
function generateArray(type) {
    switch (type) {
        case ArrayTypes.jsCookBook:
            return generateJsCookBookExerciseArray();
        case ArrayTypes.regexExercises:
            return generateRegexExerciseArray();
    }
}
exports.generateArray = generateArray;
function generateJsCookBookExerciseArray() {
    let ex_js = [];
    ex_js.push(new exercises_1.JsExercises(js_data.js_2_3_1));
    ex_js.push(new exercises_1.JsExercises(js_data.js_2_3_2));
    ex_js.push(new exercises_1.JsExercises(js_data.js_2_3_3));
    ex_js.push(new exercises_1.JsExercises(js_data.js_2_3_4));
    return ex_js;
}
function generateRegexExerciseArray() {
    let ex_regex = [];
    ex_regex.push(new exercises_1.RegexExercises(regex_data.regex_1));
    ex_regex.push(new exercises_1.RegexExercises(regex_data.regex_2));
    ex_regex.push(new exercises_1.RegexExercises(regex_data.regex_3));
    ex_regex.push(new exercises_1.RegexExercises(regex_data.regex_4));
    ex_regex.push(new exercises_1.RegexExercises(regex_data.regex_5));
    ex_regex.push(new exercises_1.RegexExercises(regex_data.regex_6));
    ex_regex.push(new exercises_1.RegexExercises(regex_data.regex_7));
    ex_regex.push(new exercises_1.RegexExercises(regex_data.regex_8));
    return ex_regex;
}
function generateExercise() {
    let aux = generateArray(ArrayTypes.jsCookBook);
    return aux[1];
}
exports.generateExercise = generateExercise;
