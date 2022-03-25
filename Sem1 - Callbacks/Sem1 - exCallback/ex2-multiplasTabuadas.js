//Multiplas Tabuadas

function tabuada(numeros, callback) {
    let resultado = ""

    for (let item of numeros) {
        let indice = 0

        for (indice = 0; indice <= 10; indice++) {
            resultado += `${item} * ${indice} = ${item * indice} \n`
        }

    }

    callback(resultado)

}


tabuada([1, 5, 2], (resultado) => {
    console.log(resultado)
})

