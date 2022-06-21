function calculaIdade(anos) {
    return `Daqui há ${anos} anos, ${this.nome} terá ${this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Emilly",
    idade: 24
};

const pessoa2 = {
    nome: "Chelly",
    idade: 18
};

const animal = {
    nome: "Marie",
    idade: 3
};
console.log(calculaIdade.call(pessoa1, 20));
console.log(calculaIdade.apply(animal, [10]));
console.log(calculaIdade.apply(pessoa2, [7]));
