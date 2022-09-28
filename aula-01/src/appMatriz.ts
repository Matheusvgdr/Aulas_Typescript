let nomes: Array<string> =['Matheus', 'Beatriz', 'Arian'];
let numeros = [2,5,3,6];

console.log(nomes[2]);

nomes.forEach((x) => {

    console.log(x);

});

numeros.forEach((e) =>{
    if(e == 2){
        console.log("esse valor é proibido");
    }else{
        console.log("O valor lido é " + e);
    }
});

