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
            return testEqual(this.correct, UserAnswer);
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
