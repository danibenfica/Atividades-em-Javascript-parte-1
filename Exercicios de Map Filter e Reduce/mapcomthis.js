const morango = {
    value: 8,
}

const cereja = {
    value: 4,
}

function mapComThis(array, thisArg){
    return array.map(function(item){
       return item * this.value;
    },thisArg);
}

const numeros = [7,3]

console.log ('this -> morango ', mapComThis(numeros, morango));
console.log ('this -> cereja ', mapComThis(numeros, cereja));