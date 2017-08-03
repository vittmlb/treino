import { JsExercises } from "../_ex/exercises";
import * as data from './raw.data';

let ex: Array<any> = [];


ex.push(new JsExercises(data.js_2_3_1));
ex.push(new JsExercises(data.js_2_3_2));
ex.push(new JsExercises(data.js_2_3_3));
ex.push(new JsExercises(data.js_2_3_4));

export const value: any = ex;

export function find(elem: string): JsExercises {
    for(let i = 0; i < ex.length; i++) {
        if(ex[i].id === elem) {
            return ex[i];
        }
    }
    return new JsExercises(ex);
}
