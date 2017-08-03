"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercises_1 = require("../_ex/exercises");
const data = require("./raw.data");
let ex = [];
ex.push(new exercises_1.JsExercises(data.js_2_3_1));
ex.push(new exercises_1.JsExercises(data.js_2_3_2));
ex.push(new exercises_1.JsExercises(data.js_2_3_3));
ex.push(new exercises_1.JsExercises(data.js_2_3_4));
exports.value = ex;
function find(elem) {
    for (let i = 0; i < ex.length; i++) {
        if (ex[i].id === elem) {
            return ex[i];
        }
    }
    return new exercises_1.JsExercises(ex);
}
exports.find = find;
