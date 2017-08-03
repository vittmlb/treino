"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class appGlobals {
    constructor() { }
    static get answer() {
        return appGlobals._answer;
    }
    static set answer(Answer) {
        appGlobals._answer = Answer;
    }
    static get exercise() {
        return appGlobals._exercise;
    }
    static set exercise(Exercise) {
        appGlobals._exercise = Exercise;
    }
    static requireReload(FilePath) {
        delete require.cache[require.resolve('../draft.js')];
        appGlobals.teste();
    }
    static teste() {
        require('../draft.js');
    }
}
exports.appGlobals = appGlobals;
