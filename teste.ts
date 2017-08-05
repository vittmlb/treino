import { find } from './_data/_jscookbook/jsExercises';
import { JsExercises } from "./_ex/exercises";
import { findRegex } from './regex/regex.exercises';
import 'mocha';

import * as b from './sera.js';

let cap = "js_2.3.1";

let array: Array<any> = b.z();


switch (cap) {
    // 2.3 --------------------------------------
    case 'js_2.3.1':
        ex_2_3_1(find('js_2.3.1'));
        break;
    case '2.3.2':
        ex_2_3_2(find('2.3.2'));
        break;
    case '2.3.3':
        ex_2_3_3(find('2.3.3'));
        break;
    case 'regex_1':
        regex_1(findRegex('regex_1'));
        break;
}


// describe(value[0].description, () => {
//     it('does something:', (done) => {
//         let aux = value[0].expected;
//         if (testEqual(b.z(), aux)) return done();
//         done(new Error('Erro !! Vai tomar no cu'));
//     });
// });

// 2.3 -------------------------------------------------------------------------------
function ex_2_3_1(aux: JsExercises) {
    console.log(aux);
    describe(aux.question, function () {
        it("it text", function (done) {
            baseItArray(aux.expected, array, done);
        });
    });
}

function ex_2_3_2(aux: any) {
    describe(aux.question, function () {
        it("it text", function (done) {
            baseItArray(aux.expected(), array, done);
        });
    });
}

function ex_2_3_3(aux: any) {
    describe(aux.question, function () {
        it("it text", function (done) {
            baseItArray(aux.expected(), array, done);
        });
    });
}

function regex_1(aux: any) {
    describe(aux.description, function () {
        it("it text", function (done) {
            baseItArray(aux.expected, array, done);
        });
    });
}

//
// function ex_2_3_4(aux) {
//     describe(aux.question, function () {
//         it('', function (done) {
//             baseItArray(aux.expected(), array, done);
//         });
//     });
// }
//
// function ex_2_3_5(aux) {
//     describe(aux.question, function () {
//         it('', function (done) {
//             baseItArray(aux.expected(), array, done);
//         });
//     });
// }
//
// function ex_2_3_6(aux) {
//     describe(aux.question, function () {
//         it(``, function (done) {
//             baseItArray(aux.expected(), array, done);
//         });
//     });
// }


function baseItArray(esperado: Array<any>, array: Array<any>, done: any) {
    console.log(array);
    console.log(esperado);
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
