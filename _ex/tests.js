"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { find, value } from '../jsCookBook/jsExercises';
const regex_exercises_1 = require("../regex/regex.exercises");
const readline = require("readline-sync");
const globals_1 = require("../globals/globals");
class ExerciseManager {
    constructor(Exercise, ExerciseNumber) {
        this._checked = false;
        this._points = 0;
        this._exercise = Exercise;
        this._exerciseNumber = ExerciseNumber;
    }
    set checked(Checked) {
        this._checked = Checked;
    }
    get checked() {
        return this._checked;
    }
    get exercise() {
        return this._exercise;
    }
    get exerciseNumber() {
        return this._exerciseNumber;
    }
    set points(Points) {
        this._points = Points;
    }
    get points() {
        return this.points;
    }
}
class Tests {
    constructor(NumberOfQuestions) {
        this._questionsArray = [];
        this._currentQuestionNumber = 0;
        this.numberOfQuestions = NumberOfQuestions;
    }
    set numberOfQuestions(NumberOfQuestions) {
        this._numberOfQuestions = NumberOfQuestions;
    }
    get numberOfQuestions() {
        return this._numberOfQuestions;
    }
    createTest() {
        for (let i = 0; i < this.numberOfQuestions; i++) {
            this._questionsArray.push(new ExerciseManager(this._genereteRandomQuestion(), i + 1));
        }
    }
    _genereteRandomQuestion() {
        let index = this._getRandom(1, regex_exercises_1.value.length);
        return regex_exercises_1.value[index];
    }
    _getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    get currentQuestion() {
        if (this._currentQuestionNumber > this._questionsArray.length - 1)
            return -1;
        return this._questionsArray[this._currentQuestionNumber];
    }
}
class DevTests extends Tests {
    constructor(NumberOfQuestions) {
        super(NumberOfQuestions);
        this.createTest();
    }
    applyTest() {
        this._questionsArray.forEach(p => {
            globals_1.appGlobals.exercise = p.exercise;
            console.log('  --------------------------------------\n');
            readline.question(p.exercise.printQuestion());
            globals_1.appGlobals.requireReload();
            p.exercise.printIsCorrect(globals_1.appGlobals.answer);
        });
    }
    renew() {
        delete require.cache[require.resolve('../draft.js')];
    }
}
exports.DevTests = DevTests;
class RegexTests extends Tests {
    constructor(NumberOfQuestions) {
        super(NumberOfQuestions);
        this.createTest();
    }
    applyTest() {
        this._questionsArray.forEach(p => {
            globals_1.appGlobals.exercise = p.exercise;
            console.log('  --------------------------------------\n');
            readline.question(p.exercise.printQuestion());
            globals_1.appGlobals.requireReload();
            p.exercise.printIsCorrect(globals_1.appGlobals.answer);
        });
    }
    renew() {
        delete require.cache[require.resolve('../draft.js')];
    }
}
exports.RegexTests = RegexTests;
