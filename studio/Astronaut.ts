import {Payload} from './Payload';

export class Astronaut implements Payload {
    constructor (massKg:number, name:string) {
        this.massKg=massKg;
        this.name=name;
    }
    massKg: number;
    name: string;
}    

