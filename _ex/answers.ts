
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
            // return testEqual(this.correct, UserAnswer);
            return objectTester(this.correct, UserAnswer);
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

// Helper to return a value's internal object [[Class]]
// That this returns [object Type] even for primitives
function getClass(obj: any): any {
    return Object.prototype.toString.call(obj);
}

/*
** @param a, b        - values (Object, RegExp, Date, etc.)
** @returns {boolean} - true if a and b are the object or same primitive value or
**                      have the same properties with the same values
*/
function objectTester(a: any, b: any): boolean {

    // If a and b reference the same value, return true
    if (a === b) return true;

    // If a and b aren't the same type, return false
    if (typeof a != typeof b) return false;

    // Already know types are the same, so if type is number
    // and both NaN, return true
    if (typeof a == 'number' && isNaN(a) && isNaN(b)) return true;

    // Get internal [[Class]]
    let aClass = getClass(a);
    let bClass = getClass(b);

    // Return false if not same class
    if (aClass != bClass) return false;

    // If they're Boolean, String or Number objects, check values
    if (aClass == '[object Boolean]' || aClass == '[object String]' || aClass == '[object Number]') {
        if (a.valueOf() != b.valueOf()) return false;
    }

    // If they're RegExps, Dates or Error objects, check stringified values
    if (aClass == '[object RegExp]' || aClass == '[object Date]' || aClass == '[object Error]') {
        if (a.toString() != b.toString()) return false;
    }

    // For functions, check stringigied values are the same
    // Almost impossible to be equal if a and b aren't trivial
    // and are different functions
    if (aClass == '[object Function]' && a.toString() != b.toString()) return false;

    // For all objects, (including Objects, Functions, Arrays and host objects),
    // check the properties
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);

    // If they don't have the same number of keys, return false
    if (aKeys.length != bKeys.length) return false;

    // Check they have the same keys
    if (!aKeys.every(function(key){return b.hasOwnProperty(key)})) return false;

    // Check key values - uses ES5 Object.keys
    return aKeys.every(function(key){
        return objectTester(a[key], b[key])
    });
    // return false;
}
