let semana: Array<string> = ["Segunda","Terça","Quarta","Quinta","Sexta" ,"Sábado","Domingo"]

let exibir = (x?:string): string => { 
    let teste = x || semana[Math.floor(Math.random() * 6)];
    return `O dia da semana selecionado foi ${teste}`;
}

console.log(exibir());
