class Busca{
   myIndexOfInt = (x: Array<number>, y: number ): number => {

    for(let i: number = 0; i < x.length; i++){
     
     if(x[i] == y){

        return i;
     }
     
    }
    return -1;
}

    myIndexOf = (x: Array<string>, y: string ): boolean => {

    for(let i: number = 0; i < x.length; i++){
      
      if(x[i] == y){

        return true;

      }
        return false;
      }
}
}

export {Busca};
 
