// import { find, value } from '../jsCookBook/jsExercises';
import { find, value } from '../regex/regex.exercises';
import * as readline from "readline-sync";
import { JsExercises, RegexExercises } from "./exercises";
import * as Loader from '../mocha.helper.js';
import { appGlobals } from "../globals/globals";

class ExerciseManager {
    _exercise: any;
    _exerciseNumber: number;
    _checked: boolean = false;
    _points: number = 0;
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
        return this.points;
    }
}

abstract class Tests {
    _numberOfQuestions: number;
    _questionsArray: Array<any> = [];
    _exercisesArray: Array<ExerciseManager>;
    _currentQuestionNumber: number = 0;
    _currentQuestion: any;

    constructor(NumberOfQuestions: number) {
        this.numberOfQuestions = NumberOfQuestions;
    }

    set numberOfQuestions(NumberOfQuestions: number) {
        this._numberOfQuestions = NumberOfQuestions;
    }

    get numberOfQuestions(): number {
        return this._numberOfQuestions;
    }

    createTest(): void {
        for (let i = 0; i < this.numberOfQuestions; i++) {
            this._questionsArray.push(new ExerciseManager(this._genereteRandomQuestion(), i + 1));
        }
    }

    private _genereteRandomQuestion(): any {
        let index: number = this._getRandom(1, value.length);
        return value[index];
    }

    private _getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    get currentQuestion(): any {
        if (this._currentQuestionNumber > this._questionsArray.length - 1) return -1;
        return this._questionsArray[this._currentQuestionNumber];
    }

}

export class DevTests extends Tests {
    _draftUrl: string;

    constructor(NumberOfQuestions: number) {
        super(NumberOfQuestions);
        this.createTest();
    }


    applyTest(): any {
        this._questionsArray.forEach(p => {
            appGlobals.exercise = p.exercise;
            console.log('  --------------------------------------\n');
            readline.question(p.exercise.printQuestion());
            appGlobals.requireReload();
            p.exercise.printIsCorrect(appGlobals.answer);
        });
    }

    renew(): any {
        delete require.cache[require.resolve('../draft.js')];
    }

}

export class RegexTests extends Tests {
    _draftUrl: string;

    constructor(NumberOfQuestions: number) {
        super(NumberOfQuestions);
        this.createTest();
    }


    applyTest(): any {
        this._questionsArray.forEach(p => {
            appGlobals.exercise = p.exercise;
            console.log('  --------------------------------------\n');
            readline.question(p.exercise.printQuestion());
            appGlobals.requireReload();
            p.exercise.printIsCorrect(appGlobals.answer);
        });
    }

    renew(): any {
        delete require.cache[require.resolve('../draft.js')];
    }

}