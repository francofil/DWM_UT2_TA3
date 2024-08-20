function removeFromArray(arreglo, item){
    for(i=0; i<arreglo.length; i++){
        if(arreglo[i] == item){
            arreglo.splice(i, 1)
        }
    }   
    console.log(arreglo)
}
removeFromArray([1, 2, 3, 4], 1)