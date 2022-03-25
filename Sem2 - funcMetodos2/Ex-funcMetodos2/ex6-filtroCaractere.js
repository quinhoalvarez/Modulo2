// Filtro caracatere

const cidades = [
    "Salvadorrrr",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const resultado = cidades.filter((cidade) => {
    return cidade.length <= 8
})

console.log(resultado)