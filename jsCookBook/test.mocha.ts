import { find } from '../jsCookBook/jsExercises';
import { JsExercises } from "../_ex/exercises";
import * as mocha from '../node_modules/mocha';
import { expect } from 'chai';


import * as draft from '../draft.js';

let cap = "js_2.3.1";

let array: any = draft.answer();
array = array.expected;


switch (cap) {
    // 2.3 --------------------------------------
    case 'js_2.3.1':
        js_2_3_1(find('js_2.3.1'));
        break;
    case 'js_2.3.2':
        js_2_3_2(find('js_2.3.2'));
        break;
    case 'js_2.3.3':
        js_2_3_3(find('2.3.3'));
        break;
}

// 2.3 -------------------------------------------------------------------------------
function js_2_3_1(aux: JsExercises) {
    console.log(`js_2_3_1`);
    describe(`Pq este teste não está entrando?`, function () {
        it("", function (done) {
            expect(array).to.equal(['dog', 'cat', 'walrus', 'lion', 'cat']);
            baseItArray(aux._expected, array, done);
        });
    });
}

function js_2_3_2(aux: any) {
    describe(aux.question, function () {
        it('', function (done) {
            baseItArray(aux.expected(), array, done);
        });
    });
}

function js_2_3_3(aux: any) {
    describe(aux.question, function () {
        it("it text", function (done) {
            baseItArray(aux.expected(), array, done);
        });
    });
}

function baseItArray(esperado: Array<any>, array: Array<any>, done: any) {
    if (!testEqual(esperado, array)) return done(new Error("Houve um erro"));
    done();
}

function testEqual(esperadoArray: Array<any>, testArray: any): boolean {
    if (esperadoArray.length !== testArray.length) return false;
    for (let i = 0; i < esperadoArray.length; i++) {
        if (esperadoArray[i] !== testArray[i]) {
            return false;
        }
    }
    return true;
}
