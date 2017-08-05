// import { find, value } from '../jsCookBook/jsExercises';
import { generateArray, ArrayTypes } from '../_data/data.file';
import * as readline from "readline-sync";
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
        return this._points;
    }
}

abstract class Tests {
    _typeOfTest: ArrayTypes;
    _rawData: Array<any>;
    _numberOfQuestions: number = 0;
    _questionsArray: Array<any> = []; // todo: Mudar esse nome. Confunde com o _exercisesArray na hora de chamar a propriedade.
    _exercisesArray: Array<ExerciseManager>;
    _currentQuestionNumber: number = 0;
    _currentQuestion: any;

    constructor(NumberOfQuestions: number, TypeOfTest: ArrayTypes) {
        this.numberOfQuestions = NumberOfQuestions;
        this.typeOfTest = TypeOfTest;
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

    private set typeOfTest(Type: ArrayTypes) {
        this._typeOfTest = Type;
        this._rawData = generateArray(Type);
    }

    private _genereteRandomQuestion(): any {
        let index: number = this._getRandom(1, this._rawData.length);
        return this._rawData[index];
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
        super(NumberOfQuestions, ArrayTypes.jsCookBook);
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
        // delete require.cache[require.resolve('../draft.js')];
    }

}

export class RegexTests extends Tests {
    _draftUrl: string;

    constructor(NumberOfQuestions: number) {
        super(NumberOfQuestions, ArrayTypes.regexExercises);
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
        // delete require.cache[require.resolve('../draft.js')];
    }

}

export class ReplTests extends Tests {
    constructor(NumberOfQuestions: number) {
        super(NumberOfQuestions, ArrayTypes.jsCookBook);
        this.createTest();
    }

    next(): void {
        if(this._currentQuestionNumber > this._numberOfQuestions) {
            console.log('Fim de teste');
        } else {
            console.log('else');
            this._currentQuestionNumber += 1;
            this.printQ(this._currentQuestionNumber);
        }
    }

    printQ(QuestionNumber?: number): void {
        this._questionsArray[QuestionNumber || this._currentQuestionNumber].exercise.printQuestion();
        // console.log(this._exercisesArray[QuestionNumber || this._currentQuestionNumber]);
    }

    get info(): any {
        return this._questionsArray[this._currentQuestionNumber].exercise.info;
    }

    set ans(Answer: any) {
        let aux = this._questionsArray[this._currentQuestionNumber];
        aux.exercise.printIsCorrect(Answer) ? aux.points = 1 : aux.points = 0;
    }

}