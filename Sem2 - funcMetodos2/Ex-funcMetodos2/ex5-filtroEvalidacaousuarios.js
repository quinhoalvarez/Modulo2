// Filtro e validação de usuários

const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]

const resultado = usuários.filter((usuario) => {
    return usuario.idade > 18 && usuario.idade < 65;
})

const habilitacao = resultado.every((cnh) => {
    return cnh.habilitado === true;
})

if (habilitacao) {
    console.log('Todos passaram no teste')
} else {
    console.log('Todos precisam estar habilitados')
}

// console.log(habilitacao)