export namespace A{
    export const a = 5;

    export interface B{
        c:number;
    }
}

export const Obj = {};

export type MyType = string | number;

//Default export может быть только 1 
export default function run(){
    console.log('run');
}