import { Answers, AnswersTypes, JsAnswers, RegexAnswers } from "./answers";
import * as chalk from '../node_modules/chalk';
import { PrintPatterns } from "./print.patterns";

interface IExercise {
    id: string;

}

const tab: string = '  ';


export abstract class Exercises implements IExercise {
    id: string;
    _source: any;
    _question: any;
    _answer: Answers;
    _data: any;
    _metadata: any;
    _userAnswer: any;
    _exercise: number;

    constructor(private _id: string) {
        this.id = _id;
    }

    set source(Source: any) {
        this._source = Source;
    }

    get source(): any {
        return this._source;
    }

    set question(_question: any) {
        this._question = _question;
    }

    get question(): any {
        return this._question;
    }

    get title(): string {
        return this._question.title;
    }

    set exercise(Exercise: number) {
        this._exercise = Exercise;
    }

    get exercise(): number {
        return this._exercise;
    }

    set data(Data: any) {
        this._data = Data;
    }

    set metadata(Metadata: any) {
        this._metadata = Metadata;
    }

    set userAnswer(UserAnswer: any) {
        this._userAnswer = UserAnswer;
    }

    get userAnswer(): any {
        return this._userAnswer;
    }

    get info(): any {
        return shallowCopy(this._data.info);
    }

    checkUserAnswer(UserAnswer: any): boolean {
        this.userAnswer = UserAnswer;
        return this._answer.isCorrect(this.userAnswer);
    }

    printResult(UserAnswer: any): void {
        this.checkUserAnswer(UserAnswer) ? PrintPatterns.Correct(this._answer._correct, UserAnswer): PrintPatterns.Wrong(this._answer._correct, UserAnswer)
    }

    printQuestion(): void {
        console.log(`${tab}Info: `, this._data.info);
    }

}

export class JsExercises extends Exercises {
    private _book: string;
    private _chapter: number;
    private _subChapter: number;

    constructor(obj: any) {
        super(`js_${obj.chapter}.${obj.subChapter}.${obj.exercise}`);
        this.source = obj.source;
        this.question = obj.question;
        this.answer = obj.answer;
        this.data = obj.data;
        this.metadata = obj.metadata;
    }

    set answer(Answer: any) {
        this._answer = new JsAnswers(Answer.type);
        this._answer._correct = Answer.correct;
    }

    get answer(): any {
        return this._answer;
    }


    // isAnswerCorrect(Answer: any): boolean {
    //     this.userAnswer = Answer;
    //     return this._answer.isCorrect(Answer)
    // }
    //
    // printIsCorrect(Answer: any): boolean {
    //     console.log(chalk.green('  Correta: '), this.answer.correct);
    //     if (this.isAnswerCorrect(Answer)) {
    //         console.log(chalk.green(`${tab}Usuário: `), this.userAnswer);
    //         console.log(chalk.green(`${tab}Correta`));
    //         return true;
    //     }
    //     console.log(chalk.red(`${tab}Usuario: `), this.userAnswer);
    //     return false;
    // }
    //
    // printAnswer(): boolean {
    //     console.log(chalk.green('  Correta: '), this.answer.correct);
    //     if (this._userAnswer) {
    //         console.log(chalk.green(`${tab}Usuário: `), this.userAnswer);
    //         console.log(chalk.green(`${tab}Correta`));
    //         return true;
    //     }
    //     console.log(chalk.red(`${tab}Usuario: `), this.userAnswer);
    //     return false;
    // }

    printQuestion(): void {
        console.log(`${tab}${chalk.blue.bold(this._question.index)} ) ${this._question.title}`);
        console.log(`${tab}Info: `, this._data.info);
    }

}

export class RegexExercises extends Exercises {
    _patternArray: Array<any>;

    constructor(obj: any) {
        super(`regex_.${obj.exercise}`);
        this.source = obj.source;
        this.question = obj.question;
        this.answer = obj.answer;
        this.data = obj.data;
        this.metadata = obj.metadata;
    }

    set answer(Answer: any) {
        this._answer = new RegexAnswers(Answer.type);
        this._answer._correct = Answer.correct;
    }

    get answer(): any {
        return this._answer;
    }


    // isAnswerCorrect(Answer: any): boolean {
    //     this.userAnswer = Answer;
    //     return this._answer.isCorrect(Answer)
    // }
    //
    // printIsCorrect(Answer: any): boolean {
    //     console.log(chalk.green('  Correta: '), this.answer.correct);
    //     if (this.isAnswerCorrect(Answer)) {
    //         console.log(chalk.green(`${tab}Usuário: `), this.userAnswer);
    //         console.log(chalk.green(`${tab}Correta`));
    //         return true;
    //     }
    //     console.log(chalk.red(`${tab}Usuario: `), this.userAnswer);
    //     return false;
    // }

    printQuestion(): void {
        console.log(`${tab}${chalk.blue.bold(this._question.index)} ) ${this._question.title}`);
        console.log(`${tab}Info: `, this._data.info);
    }
}


function shallowCopy(array: Array<any>): Array<any> {
    let aux = [];
    for (let i = 0; i < array.length; i++) {
        aux.push(array[i]);
    }
    return aux;
}