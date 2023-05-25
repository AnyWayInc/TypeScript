import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { CommandExecuter } from "../core/executer/command.executer";
import { IStreamLogger } from "../core/handlers/stream-logger.interface";
import { ICommandExecFfmpeg, IFffmpegInput } from "./ffmpeg.types";
import { PromptService } from "../core/prompt.service";
import { FileService } from "../core/files/file.service";
import { StreamHandler } from "../core/handlers/stream.handler";

export class FffmpegExec extends CommandExecuter<IFffmpegInput>{
    private fileService: FileService = new FileService();
    private promptService: PromptService = new PromptService();

    constructor(logger:IStreamLogger){
        super(logger);
    }


    protected async prompt(): Promise<IFffmpegInput> {
        const width = await this.promptService.input<number>('Ширина','number');
        const height = await this.promptService.input<number>('Высота','number');
        const path = await this.promptService.input<string>('Путь до файла','input');
        const name = await this.promptService.input<string>('Имя','input');
        return {width, height, path, name};
    }

    protected build({width, height, path, name}: IFffmpegInput): ICommandExecFfmpeg {
        const output = this.fileService.getFilePath(path, name, 'mp4');
        const args = (new FffmpegBuilder).input(path).addResolution(width, height).output(output);
        return { command: 'ffmpeg', args , output};
    }

    protected spawn({ command, args , output}: ICommandExecFfmpeg): ChildProcessWithoutNullStreams {
        this.fileService.deleteFileIsExist(output);
        return spawn(command, args);
    }

    protected processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void {
        const handler = new StreamHandler(logger);
        handler.processOutout(stream);
    }

}