class Veiculo{
    cor: string;
    modelo: string;
    fabricante: string;

    constructor(cor: string, modelo: string, fabricante: string){
        this.cor = cor;
        this.modelo = modelo;
        this.fabricante = fabricante;
    }

    acelerar(){
        console.log("O veículo está acelerando");
    }

    parar(){
        console.log("O veículo está parando");;
    }
    
}

export{Veiculo}
