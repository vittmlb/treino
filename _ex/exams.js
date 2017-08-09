"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { find, value } from '../jsCookBook/jsExercises';
const data_file_1 = require("../_data/data.file");
const readline = require("readline-sync");
const clear = require("../node_modules/clear");
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
class Exam {
    constructor(NumberOfQuestions, TypeOfTest) {
        this._numberOfQuestions = 0;
        this._questionsArray = [];
        this._currentQuestionNumber = 0;
        this._score = 0;
        this.numberOfQuestions = NumberOfQuestions;
        this.typeOfExam = TypeOfTest;
    }
    set numberOfQuestions(NumberOfQuestions) {
        this._numberOfQuestions = NumberOfQuestions;
    }
    get numberOfQuestions() {
        return this._numberOfQuestions;
    }
    nextQ(WillPrint) {
        if (this.endOfExam())
            return;
        WillPrint ? this.printQ(this._currentQuestionNumber) : 0;
        this._currentQuestionNumber += 1;
    }
    endOfExam() {
        if (this._currentQuestionNumber > this._questionsArray.length - 1) {
            console.log('Fim de Exame');
            console.log(`Total points: ${this.totalPoints()}`);
            return true;
        }
        return false;
    }
    totalPoints() {
        this._questionsArray.forEach((p) => {
            this._score += p.points;
        });
        return this._score;
    }
    printQ(QuestionNumber) {
        if (this.endOfExam())
            return;
        let q = this.getQ(QuestionNumber);
        q.exercise.printQuestion();
    }
    get currentQuestionNumber() {
        return this._currentQuestionNumber + 1;
    }
    getQ(QuestionNumber) {
        if (this._NotLastQ(QuestionNumber || this._currentQuestionNumber))
            return this._questionsArray[QuestionNumber || this._currentQuestionNumber];
        return false; // todo: Throw Error !!
    }
    checkAnswer(Answer) {
        let question = this.Q;
        if (!this.endOfExam()) {
            question.points = question.isAnswerCorrect(Answer) ? 1 : 0;
            question.checked = true;
        }
        question.printAnswer();
    }
    get Q() {
        if (this._NotLastQ(this._currentQuestionNumber))
            return this._questionsArray[this._currentQuestionNumber];
        return false; // todo: Throw Error !!
    }
    /**
     * Check if the current question doesn't exceed the exercises array length.
     * @returns {boolean}
     * @private
     */
    _NotLastQ(QuestionNumber) {
        return (QuestionNumber || this._currentQuestionNumber) <= this._questionsArray.length;
    }
    createExam() {
        for (let i = 0; i < this.numberOfQuestions; i++) {
            this._questionsArray.push(new ExerciseManager(this._genereteRandomQuestion(), i + 1));
        }
    }
    set typeOfExam(Type) {
        this._typeOfExam = Type;
        this._rawData = data_file_1.generateArray(Type);
    }
    _genereteRandomQuestion() {
        let index = Exam._getRandom(1, this._rawData.length);
        return this._rawData[index];
    }
    static _getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
class DevTests extends Exam {
    constructor(NumberOfQuestions) {
        super(NumberOfQuestions, data_file_1.ArrayTypes.jsCookBook);
        this.createExam();
    }
    applyTest() {
        while (!this.endOfExam()) {
            globals_1.appGlobals.exercise = this.getQ().exercise;
            console.log('  --------------------------------------\n');
            readline.question(this.printQ());
            globals_1.appGlobals.requireReload();
            this.getQ().exercise.printIsCorrect(globals_1.appGlobals.answer);
            readline.question('\n  Next: Enter');
            clear();
            this.nextQ();
        }
    }
}
exports.DevTests = DevTests;
class RegexTests extends Exam {
    constructor(NumberOfQuestions) {
        super(NumberOfQuestions, data_file_1.ArrayTypes.regexExercises);
        this.createExam();
    }
    applyTest() {
        while (!this.endOfExam()) {
            globals_1.appGlobals.exercise = this.Q.exercise;
            console.log('  --------------------------------------\n');
            readline.question(this.printQ());
            globals_1.appGlobals.requireReload();
            this.Q.exercise.printIsCorrect(globals_1.appGlobals.answer);
            this.nextQ();
        }
    }
}
exports.RegexTests = RegexTests;
class ReplTests extends Exam {
    constructor(NumberOfQuestions) {
        super(NumberOfQuestions, data_file_1.ArrayTypes.jsCookBook);
        this.createExam();
    }
    get info() {
        return this._questionsArray[this._currentQuestionNumber].exercise.info;
    }
    set ans(Answer) {
        this.checkAnswer(Answer);
        console.log(Answer);
    }
    nx() {
        this.nextQ(true);
    }
    p() {
        this.printQ();
    }
}
exports.ReplTests = ReplTests;
