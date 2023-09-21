import { IPayload } from "./payload.js";

class Cargo implements IPayload{
    massKg: number;
    material:string;
    constructor( massKg :number,material:string){
        this. massKg=massKg;
        this.material=material;
    }
}
export {Cargo}
