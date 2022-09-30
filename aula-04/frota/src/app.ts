import {Moto} from "./moto";
import { Caminhao } from "./caminhao";

let m1 = new Moto("Vermelha", "ninja 400","kawasaki");

let c1 = new Caminhao("Azul", "Carreta", " Volkswagen");

console.log(`A moto é da cor ${m1.cor} e modelo ${m1.modelo}`);
m1.empinar();

c1.descarregar();
