//---- VARIAVEIS
let numSorteados: Array<number> = [];
let numAleatorio: number;

//---- FUNÇÃO
let sortear = (x?:number, y?:number):  Array<number> =>{ 
    let op: number = x ;
    let alt: number = y ;

    //---- LOOP
    for(let i: number = 0; i < op; i++){ 
        numAleatorio = Math.floor((Math.random() * alt) + 1 ) ;

        //O indexOf retorna -1 se o elemento não existe
        numSorteados.indexOf(numAleatorio) == -1 ? numSorteados.push(numAleatorio) : i--;
    }
    numSorteados.sort((n1, n2) => n1 - n2);
    
    return numSorteados;
};


