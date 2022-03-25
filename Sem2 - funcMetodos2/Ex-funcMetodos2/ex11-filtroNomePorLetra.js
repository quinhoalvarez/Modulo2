// Filtro nome por letra

const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
]

const resultado = nomes.filter((nome) => {
    const primeiraLetra = nome.slice(0, 1)
    //console.log(primeiraLetra)
    return primeiraLetra.includes('a') || primeiraLetra.includes('A')
})

console.log(resultado)