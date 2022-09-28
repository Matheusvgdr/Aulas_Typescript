//Função tradicioal

function somar(x:number, y:number): number{
    return x + y;
};

console.log("o valor da soma é " + somar(6,4));

//Função anônima

let funcao = function(x:number, y:number):number{
    return x - y;
};

console.log("O valor da subtração é " + funcao(6,1));

//Arrow function
let seta = (x:number, y:number):number => {
    return x * y;
};

console.log("O valor da multiplicação é " + seta(6,3));