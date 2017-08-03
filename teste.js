"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsExercises_1 = require("./jsCookBook/jsExercises");
const regex_exercises_1 = require("./regex/regex.exercises");
require("mocha");
const b = require("./sera.js");
let cap = "js_2.3.1";
let array = b.z();
switch (cap) {
    // 2.3 --------------------------------------
    case 'js_2.3.1':
        ex_2_3_1(jsExercises_1.find('js_2.3.1'));
        break;
    case '2.3.2':
        ex_2_3_2(jsExercises_1.find('2.3.2'));
        break;
    case '2.3.3':
        ex_2_3_3(jsExercises_1.find('2.3.3'));
        break;
    case 'regex_1':
        regex_1(regex_exercises_1.findRegex('regex_1'));
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
function ex_2_3_1(aux) {
    console.log(aux);
    describe(aux.question, function () {
        it("it text", function (done) {
            baseItArray(aux.expected, array, done);
        });
    });
}
function ex_2_3_2(aux) {
    describe(aux.question, function () {
        it("it text", function (done) {
            baseItArray(aux.expected(), array, done);
        });
    });
}
function ex_2_3_3(aux) {
    describe(aux.question, function () {
        it("it text", function (done) {
            baseItArray(aux.expected(), array, done);
        });
    });
}
function regex_1(aux) {
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
function baseItArray(esperado, array, done) {
    console.log(array);
    console.log(esperado);
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
