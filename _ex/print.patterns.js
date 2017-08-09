"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
class PrintPatterns {
    static Correct(Answer, UserAnswer) {
        console.log(chalk.green('  Correta: '), Answer.correct);
        console.log(chalk.green(`  Usuário: `), UserAnswer);
        console.log(chalk.green(`  Correta`));
    }
    static Wrong(Answer, UserAnswer) {
        console.log(chalk.green('  Correta: '), Answer.correct);
        console.log(chalk.green(`  Usuário: `), UserAnswer);
        console.log(chalk.red(`  Usuario: `), UserAnswer);
    }
}
exports.PrintPatterns = PrintPatterns;
