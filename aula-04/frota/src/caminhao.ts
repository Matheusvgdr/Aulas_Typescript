import { Veiculo } from "./veiculo";

export {Caminhao};

class Caminhao extends Veiculo{
    tamanhoCacamba: number;

    descarregar(): void{
        console.log("O caminhão está descarregando");
    }
}

