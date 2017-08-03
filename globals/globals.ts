import { JsExercises } from "../_ex/exercises";
import * as reloader from '../node_modules/require-reload';

export class appGlobals {
    private static _answer: any;
    private static _exercise: any;

    constructor() {}

    static get answer(): any {
        return appGlobals._answer;
    }

    static set answer(Answer: any) {
        appGlobals._answer = Answer;
    }

    static get exercise(): any {
        return appGlobals._exercise;
    }

    static set exercise(Exercise: any) {
        appGlobals._exercise = Exercise;
    }

    static requireReload(FilePath?: string): void {
        delete require.cache[require.resolve('../draft.js')];
        appGlobals.teste();
    }

    static teste(): void {
        require('../draft.js');
    }

}