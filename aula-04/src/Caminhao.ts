import { Veiculo } from "./Veiculo";

class Caminhao extends Veiculo{

    descarregar(){
        console.log("O caminhão está descarregando");
    }
}

export {Caminhao};