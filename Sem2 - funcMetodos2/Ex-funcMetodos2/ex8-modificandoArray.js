// Modificando Array

const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const resultado = frutas.map((fruta, indice) => {
    const palavraSemPrimeiraLetra = fruta.slice(1).toLowerCase();
    const primeiraLetra = fruta.slice(0, 1).toUpperCase()
    const palavraFormatada = primeiraLetra + palavraSemPrimeiraLetra
    return `${indice} - ${palavraFormatada}`
})

console.log(resultado)