import { Astronaut } from "./astronaut.js";
import { Cargo } from "./cargo.js";
import { Rocket } from "./rocket.js";
let car = new Cargo(100, "car");
let ast = new Astronaut(50, "Anjali");
let rock = new Rocket("raccoon", 1000);
rock.addAstronaut(ast);
rock.addCargo(car);
