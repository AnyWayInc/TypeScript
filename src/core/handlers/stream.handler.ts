import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "./stream-logger.interface";

export class StreamHandler { 
    constructor(private logger: IStreamLogger){}

    //По сути тут обработчик ввода данных
    //stdout при вводимых данных задаст значение log
    //stderr при неккоректных данных вызовет ошибку
    //on просто без строки вызовет закрытие
    processOutout(stream: ChildProcessWithoutNullStreams){
        stream.stdout.on('data',(data: any) => {
            this.logger.log(data.toString());
        })

        stream.stderr.on('data',(data: any) => {
            this.logger.error(data.toString());
        })

        stream.on('close',() => {
            this.logger.end();
        })
    }
}