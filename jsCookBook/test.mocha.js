"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsExercises_1 = require("../_data/_jscookbook/jsExercises");
const chai_1 = require("chai");
const draft = require("../draft.js");
let cap = "js_2.3.1";
let array = draft.answer();
array = array.expected;
switch (cap) {
    // 2.3 --------------------------------------
    case 'js_2.3.1':
        js_2_3_1(jsExercises_1.find('js_2.3.1'));
        break;
    case 'js_2.3.2':
        js_2_3_2(jsExercises_1.find('js_2.3.2'));
        break;
    case 'js_2.3.3':
        js_2_3_3(jsExercises_1.find('2.3.3'));
        break;
}
// 2.3 -------------------------------------------------------------------------------
function js_2_3_1(aux) {
    console.log(`js_2_3_1`);
    describe(`Pq este teste não está entrando?`, function () {
        it("", function (done) {
            chai_1.expect(array).to.equal(['dog', 'cat', 'walrus', 'lion', 'cat']);
            baseItArray(aux._expected, array, done);
        });
    });
}
function js_2_3_2(aux) {
    describe(aux.question, function () {
        it('', function (done) {
            baseItArray(aux.expected(), array, done);
        });
    });
}
function js_2_3_3(aux) {
    describe(aux.question, function () {
        it("it text", function (done) {
            baseItArray(aux.expected(), array, done);
        });
    });
}
function baseItArray(esperado, array, done) {
    if (!testEqual(esperado, array))
        return done(new Error("Houve um erro"));
    done();
}
function testEqual(esperadoArray, testArray) {
    if (esperadoArray.length !== testArray.length)
        return false;
    for (let i = 0; i < esperadoArray.length; i++) {
        if (esperadoArray[i] !== testArray[i]) {
            return false;
        }
    }
    return true;
}
