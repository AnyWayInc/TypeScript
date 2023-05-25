import { FffmpegExec } from "./commands/ffmpeg-exec";
import { ConsoleLogger } from "./out/console-logger/console-logger";
 
export class App {
    async run(){
        new FffmpegExec(ConsoleLogger.getInstance()).execute();
    }
}

const app = new App();
app.run();