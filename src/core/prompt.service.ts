import inquirer from 'inquirer';
import { PromptType } from './prompt.types';

export class PromptService { 
    public async input<T>(message: string, type: PromptType){
        //Обработка ввода данных через await так как inquirer выдает promise:any 
        const { result } = await inquirer.prompt<{ result: T}>([
            {
                type,
                name: 'result',
                message
            }
        ]);
        return result;
    }
}