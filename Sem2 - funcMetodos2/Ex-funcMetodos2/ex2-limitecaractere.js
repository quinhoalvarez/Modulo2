// Limite Caractere

const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const resultado = palavras.some((item) => {
    return item.length > 5

})

if (resultado) {
    console.log('existe palavra inválida')
} else {
    console.log('array validado')
}
