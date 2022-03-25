// Array usuario

const usuarios = [
    { id: 12, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
]

usuarios.sort((a, b) => {
    return a.id - b.id
})

console.log(usuarios)