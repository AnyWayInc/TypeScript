class FffmpegBuilder {
    private inputPath!: string;
    private outputPath!: string; 
    private option: Map<string,string> = new Map();

    constructor(){
        this.option.set('-c:v ','libx264');
    }

    input(inputPath: string){
        this.inputPath = inputPath;
        return this;
    }

    addResolution(width: number, height: number){
        this.option.set('-s',`${width}x${height}`)
        return this;
    }

    output(outputPath: string){
        if(!this.inputPath){
            throw new Error('Не задан параметр input')
        }
        const args: string[] = ['-i', this.inputPath];
        this.option.forEach((key,value) =>{
            args.push(key);
            args.push(value)
        })
        args.push(outputPath)
        return args;
    }
}


const a = new FffmpegBuilder().input('').addResolution(1920,1080).output('//');