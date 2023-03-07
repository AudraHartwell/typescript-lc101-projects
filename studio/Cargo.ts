import {Payload} from './Payload';
import { Astronaut } from './Astronaut';


    export class Cargo implements Payload {
        constructor (massKg:number, material:string) {
            this.massKg=massKg;
            this.material=material;
        }
        massKg: number;
        material: string;
    }    
    