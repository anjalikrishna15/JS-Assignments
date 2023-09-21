import { Astronaut } from "./astronaut.js";
import { Cargo } from "./cargo.js";
import { Rocket } from "./rocket.js";

//getting cargo values
var cargoWeight=parseInt(prompt("enter cargo weight"));
var carName=prompt("enter cargo Name")


var astronautWeight=parseInt(prompt("enter astronaut weight"));
var astName=prompt("enter astronaut Name")
let car =new Cargo(cargoWeight,carName);
let ast=new Astronaut(astronautWeight,astName);

var rocetkWeight=parseInt(prompt("enter rocket weight"));
var rocketName=prompt("enter rocket Name")

let rock =new Rocket(rocketName,rocetkWeight);
rock.addCargo(car);
rock.addAstronaut(ast);
