// import { find, value } from '../jsCookBook/jsExercises';
import { generateArray, ArrayTypes } from '../_data/data.file';
import { Exercises } from "./exercises";
import * as readline from "readline-sync";
import * as clear from '../node_modules/clear';
import { appGlobals } from "../globals/globals";
import { Answers } from "./answers";


class ExerciseManager {
    _exercise: any;
    _exerciseNumber: number;
    _checked: boolean = false;
    _points: number = 0;
    _answer: Answers;

    constructor(Exercise: any, ExerciseNumber: number) {
        this._exercise = Exercise;
        this._exerciseNumber = ExerciseNumber;
    }

    set checked(Checked: boolean) {
        this._checked = Checked;
    }

    get checked(): boolean {
        return this._checked;
    }

    get exercise(): any {
        return this._exercise;
    }

    get exerciseNumber(): number {
        return this._exerciseNumber;
    }

    set points(Points: number) {
        this._points = Points;
    }

    get points(): number {
        return this._points;
    }



}

abstract class Exam {
    _typeOfExam: ArrayTypes;
    _rawData: Array<any>;
    _numberOfQuestions: number = 0;
    _questionsArray: Array<ExerciseManager> = [];
    _currentQuestionNumber: number = 0;
    _score: number = 0;

    constructor(NumberOfQuestions: number, TypeOfTest: ArrayTypes) {
        this.numberOfQuestions = NumberOfQuestions;
        this.typeOfExam = TypeOfTest;
    }

    set numberOfQuestions(NumberOfQuestions: number) {
        this._numberOfQuestions = NumberOfQuestions;
    }

    get numberOfQuestions(): number {
        return this._numberOfQuestions;
    }

    nextQ(WillPrint?: boolean): void {
        if (this.endOfExam()) return;
        WillPrint ? this.printQ(this._currentQuestionNumber) : 0;
        this._currentQuestionNumber += 1;
    }

    endOfExam(): boolean {
        if (this._currentQuestionNumber > this._questionsArray.length - 1) {
            console.log('Fim de Exame');
            console.log(`Total points: ${this.totalPoints()}`);
            return true;
        }
        return false;
    }

    totalPoints(): number {
        this._questionsArray.forEach((p) => {
            this._score += p.points;
        });
        return this._score;
    }

    printQ(QuestionNumber?: number): void {
        if (this.endOfExam()) return;
        let q = this.getQ(QuestionNumber);
        q.exercise.printQuestion();
    }

    get currentQuestionNumber(): number {
        return this._currentQuestionNumber + 1;
    }

    getQ(QuestionNumber?: number): any {
        if (this._NotLastQ(QuestionNumber || this._currentQuestionNumber)) return this._questionsArray[QuestionNumber || this._currentQuestionNumber];
        return false; // todo: Throw Error !!
    }

    checkAnswer(Answer: any): void {
        let question = this.Q;
        if (!this.endOfExam()) {
            question.points = question.isAnswerCorrect(Answer) ? 1 : 0;
            question.checked = true;
        }
        question.printAnswer();
    }

    get Q(): any {
        if (this._NotLastQ(this._currentQuestionNumber)) return this._questionsArray[this._currentQuestionNumber];
        return false; // todo: Throw Error !!
    }


    /**
     * Check if the current question doesn't exceed the exercises array length.
     * @returns {boolean}
     * @private
     */
    private _NotLastQ(QuestionNumber?: number): boolean {
        return (QuestionNumber || this._currentQuestionNumber) <= this._questionsArray.length;
    }

    createExam(): void {
        for (let i = 0; i < this.numberOfQuestions; i++) {
            this._questionsArray.push(new ExerciseManager(this._genereteRandomQuestion(), i + 1));
        }
    }

    private set typeOfExam(Type: ArrayTypes) {
        this._typeOfExam = Type;
        this._rawData = generateArray(Type);
    }

    private _genereteRandomQuestion(): any {
        let index: number = Exam._getRandom(1, this._rawData.length);
        return this._rawData[index];
    }

    private static _getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }


}

export class DevTests extends Exam {
    _draftUrl: string;

    constructor(NumberOfQuestions: number) {
        super(NumberOfQuestions, ArrayTypes.jsCookBook);
        this.createExam();
    }


    applyTest(): any {
        while (!this.endOfExam()) {
            appGlobals.exercise = this.getQ().exercise;
            console.log('  --------------------------------------\n');
            readline.question(this.printQ());
            appGlobals.requireReload();
            this.getQ().exercise.printIsCorrect(appGlobals.answer);
            readline.question('\n  Next: Enter');
            clear();
            this.nextQ();
        }
    }

}

export class RegexTests extends Exam {
    _draftUrl: string;

    constructor(NumberOfQuestions: number) {
        super(NumberOfQuestions, ArrayTypes.regexExercises);
        this.createExam();
    }

    applyTest(): any {
        while (!this.endOfExam()) {
            appGlobals.exercise = this.Q.exercise;
            console.log('  --------------------------------------\n');
            readline.question(this.printQ());
            appGlobals.requireReload();
            this.Q.exercise.printIsCorrect(appGlobals.answer);
            this.nextQ();
        }
    }

}

export class ReplTests extends Exam {
    constructor(NumberOfQuestions: number) {
        super(NumberOfQuestions, ArrayTypes.jsCookBook);
        this.createExam();
    }

    get info(): any {
        return this._questionsArray[this._currentQuestionNumber].exercise.info;
    }

    set ans(Answer: any) {
        this.checkAnswer(Answer);
        console.log(Answer);
    }

    nx(): void {
        this.nextQ(true);
    }

    p(): void {
        this.printQ();
    }

}