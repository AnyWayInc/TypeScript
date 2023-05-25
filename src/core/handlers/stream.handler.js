"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamHandler = void 0;
class StreamHandler {
    constructor(logger) {
        this.logger = logger;
    }
    //По сути тут обработчик ввода данных
    //stdout при вводимых данных задаст значение log
    //stderr при неккоректных данных вызовет ошибку
    //on просто без строки вызовет закрытие
    processOutout(stream) {
        stream.stdout.on('data', (data) => {
            this.logger.log(data.toString());
        });
        stream.stderr.on('data', (data) => {
            this.logger.error(data.toString());
        });
        stream.on('close', () => {
            this.logger.end();
        });
    }
}
exports.StreamHandler = StreamHandler;
