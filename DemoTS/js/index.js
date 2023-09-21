import { Astronaut } from "./astronaut.js";
import { Cargo } from "./cargo.js";
import { Rocket } from "./rocket.js";
//getting cargo values
var cargoWeight = parseInt(prompt("enter cargo weight"));
var carName = prompt("enter cargo Name");
//getting astronaut values
var astronautWeight = parseInt(prompt("enter astronaut weight"));
var astName = prompt("enter astronaut Name");
//creating astronaut and cargo objects
let car = new Cargo(cargoWeight, carName);
let ast = new Astronaut(astronautWeight, astName);
//getting rocket values
var rocetkWeight = parseInt(prompt("enter rocket weight"));
var rocketName = prompt("enter rocket Name");
//creating rocket object
let rock = new Rocket(rocketName, rocetkWeight);
rock.addCargo(car);
rock.addAstronaut(ast);
