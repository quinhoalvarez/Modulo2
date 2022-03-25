// Validando lista de compras

const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão", "vodka"]

const resultado = palavras.some((item) => {
    return item === 'cervejaa' || item === 'vodka'
})

if (resultado) {
    console.log('revise sua lista, joão. possui bebida com venda proibida!')
} else {
    console.log('pode comprar')
}
