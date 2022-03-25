// função nome e propriedades


const informacoes = [
    { nome: "Marco", idade: 32 },
    { nome: "Antonio", idade: 17 },
    { nome: "Mariana", idade: 18 }
];

let idades = informacoes.idade


function fiscalizadorFesta(arrayObjetos) {
    const resultado = arrayObjetos.every((informacoes) => {
        return informacoes.idade >= 18
    })

    if (resultado) {
        console.log("Festa Liberada")
    } else {
        console.log("Possiu menor de idade")
    }

    //console.log(resultado)
}



fiscalizadorFesta(informacoes);
