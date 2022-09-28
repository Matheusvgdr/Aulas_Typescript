let temMaisTitulos = function(titulos: number): boolean{
    return titulos > 35;
}

let numero = 8;

console.log(`Ter ${numero} títulos é o suficiente para passar o ... ${temMaisTitulos(8) ? 'SIM': 'NÃO'}`);

let escreva = (valor: string): void => console.log(`O nome é ${valor}`);

escreva("João ninguém");