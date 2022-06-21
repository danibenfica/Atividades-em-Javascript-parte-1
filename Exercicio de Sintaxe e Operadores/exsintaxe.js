function doisNumeros(n1, n2){
    const primeiraFrase = frase1(n1,n2);
    const segundaFrase = frase2(n1,n2);

    return `${primeiraFrase} ${segundaFrase}`
}

function frase1(n1, n2) {
    let naoSaoIguais = '';

    if(n1 !== n2) {
        naoSaoIguais = 'não';
    }

    return `Os números ${n1} e ${n2} ${naoSaoIguais} são iguais.`;
};

function frase2(n1, n2) {
    const soma = n1 + n2;

    let resultado10 = 'maior que';
    let resultado20 = 'maior que';
    const compara10 = soma < 10;
    const compara20 = soma < 20;
    const iguala10 = soma === 10;
    const iguala20 = soma === 20;
   

    if(compara10){
        resultado10 = 'menor que';
    }

    if(compara20){
        resultado20 = 'menor que';
    }

    if(iguala10){
        resultado10 = 'igual a'
    }

    if(iguala20) {
        resultado20 = 'igual a'
    }


    return `Sua soma é ${soma} que é ${resultado10} 10 e ${resultado20} 20.` 

}

console.log(doisNumeros(10,10))