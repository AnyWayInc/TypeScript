import { promises } from "fs";
import { dirname, isAbsolute, join } from "path";

export class FileService {
    private async isExist(path:string){
        try{
            //stat проверяет есть ли файл или нет
            await promises.stat(path);
            return true;
        }catch{
            return false;
        }
    }

    public getFilePath(path: string,name: string,ext: string): string{
        if(!isAbsolute(path)){
            path = join(__dirname + '/' + path);
        }
        return join(dirname(path) + '/' + name + '.' + ext);
    }

    async deleteFileIsExist(path: string){
        if(await this.isExist(path)){
            //unlink удаляет файл если он есть 
            promises.unlink(path);
        }
    }
}