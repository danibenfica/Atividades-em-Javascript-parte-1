const alunos = [
{
    nome: 'Emily',
    nota: 10
},
{
    nome: 'Thierry',
    nota: 4
},

{
    nome: 'Mônica',
    nota: 2,
},

{
    nome: 'Vitor',
    nota: 7
},
{
    nome: 'Julia',
    nota: 8
},

{
    nome: 'Marina',
    nota: 3,
},

]

function listaAprovados(lista, media){
    let aprovados = [];

    for (let i = 0; i < lista.length; i++) {

        const {nota, nome} = lista[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(listaAprovados(alunos, 6));