export{Veiculo};

class Veiculo{
    cor: string;
    modelo: string;
    fabricante: string;

    constructor(cor: string, modelo: string, fabricante: string){
        this.cor = cor;
        this.modelo = modelo;
        this.fabricante = fabricante;
    }

    acelerar(): void{
        console.log("O veículo está acelerando");
    }

    parar(): void{
        console.log("O veículo está parando");
    }
    
}

