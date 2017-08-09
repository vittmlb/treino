// import 'node';
import { DevTests, RegexTests } from "./_ex/exams"
import * as readline from "readline-sync";
import * as Chalk from 'chalk';

import * as figlet from './node_modules/figlet';
import * as clear from './node_modules/clear';



//
// function getRandom(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min) + min);
// }
//
// let z = getRandom(1, value.length);
// console.log(z);
// console.log(value[z].description);

clear();
console.log(Chalk.yellow(
    figlet.textSync('Exercises', {horizontalLayout: 'full'})
));

readline.promptCLLoop({
    random: function (target) {
        let keys = ['jsExercises', 'Regex', 'All'];
        let index = Number(readline.keyInSelect(keys, 'Which option?')) + 1;
        while (index) {
            console.log(`index: ${index}`);
            let test;
            switch (index) {
                case 1:
                    test = new DevTests(8);
                    test.applyTest();
                    break;
                case 2:
                    test = new RegexTests(4);
                    test.applyTest();
                    break;

            }
            index = Number(readline.keyInSelect(keys, 'Which option?')) + 1;
        }
    },
    add: function (target, into) {
        console.log(target + ' is added into ' + into + '.');
    },
    remove: function (target) {
        console.log(target + ' is removed.');
    },
    bye: function () {
        return true;
    }
});

console.log('Exited');
