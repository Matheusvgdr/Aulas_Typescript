import {Busca} from "./indexOf";

let busca: Busca = new Busca();

let numeros: Array<number> = [1,2,3,4,5]
let valor: number = 5

let achei: number = busca.myIndexOfInt(numeros, valor );


console.log(`Encontrou o Valor? ${(achei == valor)? 'NÃO' : 'SIM'}`);