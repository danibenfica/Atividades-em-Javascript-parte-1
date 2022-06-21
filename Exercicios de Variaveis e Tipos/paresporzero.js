function paresPorZero(lista){
    if(!lista) return -1;
    if(!lista.length) return -1;
    for(let i = 0; i < lista.length; i++){
        if(lista[i] === 0) {
            console.log('Este número ja é zero.');
        } else if (lista[i] % 2 === 0){
            console.log(`Substituindo ${lista[i]} por 0...`);
            lista[i] = 0;
        }
    }

    return lista;
}

let lista = [12, 14, 17, 18, 23, 55, 77, 85, 89, 92, 93, 102, 107];
console.log (paresPorZero(lista));
