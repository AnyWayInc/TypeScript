"use strict";
class FffmpegBuilder {
    constructor() {
        this.option = new Map();
        this.option.set('-c:v ', 'libx264');
    }
    input(inputPath) {
        this.inputPath = inputPath;
        return this;
    }
    addResolution(width, height) {
        this.option.set('-s', `${width}x${height}`);
        return this;
    }
    output(outputPath) {
        if (!this.inputPath) {
            throw new Error('Не задан параметр input');
        }
        const args = ['-i', this.inputPath];
        this.option.forEach((key, value) => {
            args.push(key);
            args.push(value);
        });
        args.push(outputPath);
        return args;
    }
}
const a = new FffmpegBuilder().input('').addResolution(1920, 1080).output('//');
