const meuArray = [12, 24, 2021, 2009, 7, 9, 35, 8, 7 ,6, 9];

function valoresUnicos(array) {
    const mySet = new Set(array);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));