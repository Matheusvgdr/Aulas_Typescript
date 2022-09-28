class Laptop{
    tela:number;

    constructor(tela:number){
        this.tela = tela;
    }

    ligarMonitor(){
        console.log("O monitor foi ligado");
    }
}

let computador = new Laptop(18);
console.log(computador.ligarMonitor());

/*---------------------------INTERFACE--------------------------*/

interface Gamer{
    placaVideo:number;
}

/*--------------------------CLASS LENOVO--------------------------------- */

class Lenovo extends Laptop implements Gamer{
    placaVideo: number = 512;

    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`Brilho subiu ${valor} pontos`)
    }
}

let pcLenovo = new Lenovo();