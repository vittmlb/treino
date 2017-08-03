
export enum AnswersTypes {
    regex,
    array,
    object
}

export abstract class Answers {
    _type: AnswersTypes;
    _expected: any;
    _correct: any;
    constructor(Type: AnswersTypes) {
        this._type = Type;
    }
    get type(): AnswersTypes {
        return this._type;
    }
    abstract set expected(value: any);
    abstract get expected(): any;
    abstract isCorrect(UserAnswer: any): boolean;
}

export class RegexAnswers extends Answers {
    _patterns: Array<any>;
    constructor(AnswerType?: AnswersTypes) {
        super(AnswersTypes.array);
    }
    get expected(): Array<any> {
        return this._expected;
    }
    set expected(value: Array<any>) {
        this._expected = value;
    }

    get patterns(): Array<any> {
        return this._patterns;
    }
    set patterns(value: Array<any>) {
        this._patterns = value;
    }

    set correct(CorrectAnswer: any) {
        this._correct = CorrectAnswer;
    }
    get correct(): any {
        return this._correct;
    }

    isCorrect(UserAnswer: any): boolean {
        if(this._type === AnswersTypes.array) {
            return testEqual(this.correct, UserAnswer);
        }
        return false;
    }
}

export class JsAnswers extends Answers {
    constructor(AnswerType: AnswersTypes) {
        super(AnswerType);
    }
    set expected(value: any) {
        this._expected = value;
    }
    get expected(): any {
        return this._expected;
    }

    set correct(CorrectAnswer: any) {
        this._correct = CorrectAnswer;
    }
    get correct(): any {
        return this._correct;
    }

    isCorrect(UserAnswer: any): boolean {
        if(this._type === AnswersTypes.array) {
            return testEqual(this.correct, UserAnswer);
        }
        return false;
    }

}

function testEqual(esperadoArray: Array<any>, testArray: any): boolean {
    if (esperadoArray.length !== testArray.length) return false;
    for (let i = 0; i < esperadoArray.length; i++) {
        if (esperadoArray[i] !== testArray[i]) {
            return false;
        }
    }
    return true;
}