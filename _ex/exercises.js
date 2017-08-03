"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aswers_1 = require("./aswers");
const chalk = require("../node_modules/chalk");
const tab = '  ';
class Exercises {
    constructor(_id) {
        this._id = _id;
        this.id = _id;
    }
    set source(Source) {
        this._source = Source;
    }
    get source() {
        return this._source;
    }
    set question(_question) {
        this._question = _question;
    }
    get question() {
        return this._question;
    }
    get title() {
        return this._question.title;
    }
    set exercise(Exercise) {
        this._exercise = Exercise;
    }
    get exercise() {
        return this._exercise;
    }
    set data(Data) {
        this._data = Data;
    }
    set metadata(Metadata) {
        this._metadata = Metadata;
    }
    set userAnswer(UserAnswer) {
        this._userAnswer = UserAnswer;
    }
    get userAnswer() {
        return this._userAnswer;
    }
    get info() {
        return shallowCopy(this._data.info);
    }
}
class JsExercises extends Exercises {
    constructor(obj) {
        super(`js_${obj.chapter}.${obj.subChapter}.${obj.exercise}`);
        this.source = obj.source;
        this.question = obj.question;
        this.answer = obj.answer;
        this.data = obj.data;
        this.metadata = obj.metadata;
    }
    set answer(Answer) {
        this._answer = new aswers_1.JsAnswers(Answer.type);
        this._answer._correct = Answer.correct;
    }
    get answer() {
        return this._answer;
    }
    isAnswerCorrect(Answer) {
        this.userAnswer = Answer;
        return this._answer.isCorrect(Answer);
    }
    printIsCorrect(Answer) {
        console.log(chalk.green('  Correta: '), this.answer.correct);
        if (this.isAnswerCorrect(Answer)) {
            console.log(chalk.green(`${tab}Usuário: `), this.userAnswer);
            console.log(chalk.green(`${tab}Correta`));
            return true;
        }
        console.log(chalk.red(`${tab}Usuario: `), this.userAnswer);
        return false;
    }
    printQuestion() {
        console.log(`${tab}${chalk.blue.bold(this._question.index)} ) ${this._question.title}`);
        console.log(`${tab}Info: `, this._data.info);
    }
}
exports.JsExercises = JsExercises;
class RegexExercises extends Exercises {
    constructor(obj) {
        super(`regex_.${obj.exercise}`);
        this.source = obj.source;
        this.question = obj.question;
        this.answer = obj.answer;
        this.data = obj.data;
        this.metadata = obj.metadata;
    }
    set answer(Answer) {
        this._answer = new aswers_1.RegexAnswers(Answer.type);
        this._answer._correct = Answer.correct;
    }
    get answer() {
        return this._answer;
    }
    isAnswerCorrect(Answer) {
        this.userAnswer = Answer;
        return this._answer.isCorrect(Answer);
    }
    printIsCorrect(Answer) {
        console.log(chalk.green('  Correta: '), this.answer.correct);
        if (this.isAnswerCorrect(Answer)) {
            console.log(chalk.green(`${tab}Usuário: `), this.userAnswer);
            console.log(chalk.green(`${tab}Correta`));
            return true;
        }
        console.log(chalk.red(`${tab}Usuario: `), this.userAnswer);
        return false;
    }
    printQuestion() {
        console.log(`${tab}${chalk.blue.bold(this._question.index)} ) ${this._question.title}`);
        console.log(`${tab}Info: `, this._data.info);
    }
}
exports.RegexExercises = RegexExercises;
function shallowCopy(array) {
    let aux = [];
    for (let i = 0; i < array.length; i++) {
        aux.push(array[i]);
    }
    return aux;
}
