"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnswersTypes;
(function (AnswersTypes) {
    AnswersTypes[AnswersTypes["regex"] = 0] = "regex";
    AnswersTypes[AnswersTypes["array"] = 1] = "array";
    AnswersTypes[AnswersTypes["object"] = 2] = "object";
})(AnswersTypes = exports.AnswersTypes || (exports.AnswersTypes = {}));
class Answers {
    constructor(Type) {
        this._type = Type;
    }
    get type() {
        return this._type;
    }
}
exports.Answers = Answers;
class RegexAnswers extends Answers {
    constructor(AnswerType) {
        super(AnswersTypes.array);
    }
    get expected() {
        return this._expected;
    }
    set expected(value) {
        this._expected = value;
    }
    get patterns() {
        return this._patterns;
    }
    set patterns(value) {
        this._patterns = value;
    }
    set correct(CorrectAnswer) {
        this._correct = CorrectAnswer;
    }
    get correct() {
        return this._correct;
    }
    isCorrect(UserAnswer) {
        if (this._type === AnswersTypes.array) {
            // return testEqual(this.correct, UserAnswer);
            return objectTester(this.correct, UserAnswer);
        }
        return false;
    }
}
exports.RegexAnswers = RegexAnswers;
class JsAnswers extends Answers {
    constructor(AnswerType) {
        super(AnswerType);
    }
    set expected(value) {
        this._expected = value;
    }
    get expected() {
        return this._expected;
    }
    set correct(CorrectAnswer) {
        this._correct = CorrectAnswer;
    }
    get correct() {
        return this._correct;
    }
    isCorrect(UserAnswer) {
        if (this._type === AnswersTypes.array) {
            return testEqual(this.correct, UserAnswer);
        }
        return false;
    }
}
exports.JsAnswers = JsAnswers;
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
// Helper to return a value's internal object [[Class]]
// That this returns [object Type] even for primitives
function getClass(obj) {
    return Object.prototype.toString.call(obj);
}
/*
** @param a, b        - values (Object, RegExp, Date, etc.)
** @returns {boolean} - true if a and b are the object or same primitive value or
**                      have the same properties with the same values
*/
function objectTester(a, b) {
    // If a and b reference the same value, return true
    if (a === b)
        return true;
    // If a and b aren't the same type, return false
    if (typeof a != typeof b)
        return false;
    // Already know types are the same, so if type is number
    // and both NaN, return true
    if (typeof a == 'number' && isNaN(a) && isNaN(b))
        return true;
    // Get internal [[Class]]
    let aClass = getClass(a);
    let bClass = getClass(b);
    // Return false if not same class
    if (aClass != bClass)
        return false;
    // If they're Boolean, String or Number objects, check values
    if (aClass == '[object Boolean]' || aClass == '[object String]' || aClass == '[object Number]') {
        if (a.valueOf() != b.valueOf())
            return false;
    }
    // If they're RegExps, Dates or Error objects, check stringified values
    if (aClass == '[object RegExp]' || aClass == '[object Date]' || aClass == '[object Error]') {
        if (a.toString() != b.toString())
            return false;
    }
    // For functions, check stringigied values are the same
    // Almost impossible to be equal if a and b aren't trivial
    // and are different functions
    if (aClass == '[object Function]' && a.toString() != b.toString())
        return false;
    // For all objects, (including Objects, Functions, Arrays and host objects),
    // check the properties
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    // If they don't have the same number of keys, return false
    if (aKeys.length != bKeys.length)
        return false;
    // Check they have the same keys
    if (!aKeys.every(function (key) { return b.hasOwnProperty(key); }))
        return false;
    // Check key values - uses ES5 Object.keys
    return aKeys.every(function (key) {
        return objectTester(a[key], b[key]);
    });
    // return false;
}
