"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { find, value } from '../jsCookBook/jsExercises';
const data_file_1 = require("../_data/data.file");
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
        return this._points;
    }
}
class Tests {
    constructor(NumberOfQuestions, TypeOfTest) {
        this._numberOfQuestions = 0;
        this._questionsArray = []; // todo: Mudar esse nome. Confunde com o _exercisesArray na hora de chamar a propriedade.
        this._currentQuestionNumber = 0;
        this.numberOfQuestions = NumberOfQuestions;
        this.typeOfTest = TypeOfTest;
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
    set typeOfTest(Type) {
        this._typeOfTest = Type;
        this._rawData = data_file_1.generateArray(Type);
    }
    _genereteRandomQuestion() {
        let index = this._getRandom(1, this._rawData.length);
        return this._rawData[index];
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
        super(NumberOfQuestions, data_file_1.ArrayTypes.jsCookBook);
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
        // delete require.cache[require.resolve('../draft.js')];
    }
}
exports.DevTests = DevTests;
class RegexTests extends Tests {
    constructor(NumberOfQuestions) {
        super(NumberOfQuestions, data_file_1.ArrayTypes.regexExercises);
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
        // delete require.cache[require.resolve('../draft.js')];
    }
}
exports.RegexTests = RegexTests;
class ReplTests extends Tests {
    constructor(NumberOfQuestions) {
        super(NumberOfQuestions, data_file_1.ArrayTypes.jsCookBook);
        this.createTest();
    }
    next() {
        if (this._currentQuestionNumber > this._numberOfQuestions) {
            console.log('Fim de teste');
        }
        else {
            console.log('else');
            this._currentQuestionNumber += 1;
            this.printQ(this._currentQuestionNumber);
        }
    }
    printQ(QuestionNumber) {
        this._questionsArray[QuestionNumber || this._currentQuestionNumber].exercise.printQuestion();
        // console.log(this._exercisesArray[QuestionNumber || this._currentQuestionNumber]);
    }
    get info() {
        return this._questionsArray[this._currentQuestionNumber].exercise.info;
    }
    set ans(Answer) {
        let aux = this._questionsArray[this._currentQuestionNumber];
        aux.exercise.printIsCorrect(Answer) ? aux.points = 1 : aux.points = 0;
    }
}
exports.ReplTests = ReplTests;
