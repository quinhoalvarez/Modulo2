function tabuada(numero, callback) {

    let resultado = ""
    let indice = 0

    for (indice = 0; indice <= 10; indice++) {
        resultado += `${numero} * ${indice} = ${numero * indice}\n`
        //console.log(`${numero} * ${indice} = ${numero * indice}`)
    }

    callback(resultado)
}

tabuada(5, (teste) => {
    console.log(teste)
});


