import * as chalk from 'chalk';
import * as clear from '../node_modules/clear';

export class PrintPatterns {

    static Correct(Answer: any, UserAnswer: any): void {
        console.log(chalk.green('  Correta: '), Answer.correct);
        console.log(chalk.green(`  Usuário: `), UserAnswer);
        console.log(chalk.green(`  Correta`));
    }

    static Wrong(Answer: any, UserAnswer: any): void {
        console.log(chalk.green('  Correta: '), Answer.correct);
        console.log(chalk.green(`  Usuário: `), UserAnswer);
        console.log(chalk.red(`  Usuario: `), UserAnswer);
    }

}