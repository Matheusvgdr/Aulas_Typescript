class Laptop{
    tela:number;

    constructor(tela:number){
        this.tela = tela;
    }

    ligarMonitor(){
        console.log("O monitor foi ligado");
    }
}

/*---------------------------INTERFACE--------------------------*/

interface Gamer{
    placaVideo:number;
}

export {Gamer};
export {Laptop};