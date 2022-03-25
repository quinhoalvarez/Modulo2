// carro

const carros = [
    { nome: 'Etios', marca: 'Toyota', ano: 2010, cor: 'Azul' },
    { nome: 'Ka', marca: 'Ford', ano: 2000, cor: 'Branca' }
]

function dadosCarros(arg1, retornoDados) { // onde arg1 = marca do carro a pesquisar
    const resultado = retornoDados.find((acharDadosCarro) => {
        return acharDadosCarro.marca === arg1
    });

    console.log(resultado)
}

dadosCarros('Ford', carros)





// function dadosCarro(arg1, arg2) {
//     console.log(arg1, arg2)
// }

// dadosCarro(carros.nome, carros.marca)