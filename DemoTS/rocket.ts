import { Astronaut } from "./astronaut.js";
import { Cargo } from "./cargo.js";

class Rocket {
    astronauts: Astronaut[]=[];
    cargoItems: Cargo[]=[];
    name: string;
    totalCapacityKg: number;
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //sunMass funtion
    public sumMass(Payload): number {
        let totalMass = 0;
        // Payload.forEach((element)=> {
        //     totalMass = totalMass + element.massKg;
        // });
        Payload.forEach(element => {
            totalMass+=element.massKg;
        });
        return totalMass;
    }

    //calculating current mass
    public currentMassKg(): number {
        let astrMass = this.sumMass(this.astronauts);
        let cargoMass = this.sumMass(this.cargoItems);
        return astrMass + cargoMass;
    }

    //checking if item van be added
    public canAdd(weight: number): boolean {
        if (this.currentMassKg() + weight <= this.totalCapacityKg)
            return true;
        else
            return false;
    }

    //function to add cargo 
    public addCargo(cargo:Cargo): boolean {
        
        if(this.canAdd(cargo.massKg)===true){
            this.cargoItems.push(cargo);
            console.log("cargo added");
            return true;
            
        }
        else{
            return false
        }
    }

   //function to add astronaut 
    public addAstronaut(astronaut:Astronaut): boolean {
        
        if(this.canAdd(astronaut.massKg)){
            this.astronauts.push(astronaut);
            console.log("astronaut added");
            return true;
        }
        else{
            return false
        }
    }
}

export {Rocket}
