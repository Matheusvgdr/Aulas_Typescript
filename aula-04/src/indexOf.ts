let teste: Array<number> = [1,2,3,4]
let letras: Array<string> =["a", "b", "c", "d"]

let myIndexOfInt = (x: Array<number>, y: number ): boolean => {

       for(let i: number = 0; i < teste.length; i++){
        
        if(teste[i] == y){

           return true;
        }
        
       }
       return false;
}

 let myIndexOfStr = (x: Array<string>, y: string ): boolean => {

    for(let i: number = 0; i < teste.length; i++){
     
      if(letras[i] == y){

        return true;

      }
        return false;
    }
 }

console.log(myIndexOfInt(teste, 3));

console.log(myIndexOfStr(letras, "m"));
 
