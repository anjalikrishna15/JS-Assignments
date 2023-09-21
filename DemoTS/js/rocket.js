class Rocket {
    constructor(name, totalCapacityKg) {
        this.astronauts = [];
        this.cargoItems = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //sunMass funtion
    sumMass(Payload) {
        let totalMass = 0;
        // Payload.forEach((element)=> {
        //     totalMass = totalMass + element.massKg;
        // });
        Payload.forEach(element => {
            totalMass += element.massKg;
        });
        return totalMass;
    }
    //calculating current mass
    currentMassKg() {
        let astrMass = this.sumMass(this.astronauts);
        let cargoMass = this.sumMass(this.cargoItems);
        return astrMass + cargoMass;
    }
    //checking if item van be added
    canAdd(weight) {
        if (this.currentMassKg() + weight <= this.totalCapacityKg)
            return true;
        else
            return false;
    }
    //function to add cargo 
    addCargo(cargo) {
        if (this.canAdd(cargo.massKg) === true) {
            this.cargoItems.push(cargo);
            console.log("cargo added");
            return true;
        }
        else {
            return false;
        }
    }
    //function to add astronaut 
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut.massKg)) {
            this.astronauts.push(astronaut);
            console.log("astronaut added");
            return true;
        }
        else {
            return false;
        }
    }
}
export { Rocket };
