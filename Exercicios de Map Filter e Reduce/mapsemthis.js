function mapSemThis(array) {
    return array.map(function(item){
        return item * 2;
    });
}

const numeros = [3, 6, 9, 12, 14, 17];
console.log(mapSemThis(numeros));