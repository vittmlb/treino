"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import 'node';
const exams_1 = require("./_ex/exams");
const readline = require("readline-sync");
const Chalk = require("chalk");
const figlet = require("./node_modules/figlet");
const clear = require("./node_modules/clear");
//
// function getRandom(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min) + min);
// }
//
// let z = getRandom(1, value.length);
// console.log(z);
// console.log(value[z].description);
clear();
console.log(Chalk.yellow(figlet.textSync('Exercises', { horizontalLayout: 'full' })));
readline.promptCLLoop({
    random: function (target) {
        let keys = ['jsExercises', 'Regex', 'All'];
        let index = Number(readline.keyInSelect(keys, 'Which option?')) + 1;
        while (index) {
            console.log(`index: ${index}`);
            let test;
            switch (index) {
                case 1:
                    test = new exams_1.DevTests(8);
                    test.applyTest();
                    break;
                case 2:
                    test = new exams_1.RegexTests(4);
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
