import { Payload } from "./payload.js";

class Astronaut implements Payload{
    massKg: number;
    name:string

    constructor( massKg:number, name:string){
        this.massKg=massKg;
        this.name=name;
    }
}

export{Astronaut}