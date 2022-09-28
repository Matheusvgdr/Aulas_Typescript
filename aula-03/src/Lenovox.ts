import {Gamer, Laptop} from "./computador-base" ;

class Lenovo extends Laptop implements Gamer{
    placaVideo: number = 512;

    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`Brilho subiu ${valor} pontos`)
    }
}

export {Lenovo as L};