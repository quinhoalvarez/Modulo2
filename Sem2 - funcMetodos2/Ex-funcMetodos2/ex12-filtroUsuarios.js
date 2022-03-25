// Filtro de usuários

const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
]

const resultado1 = pessoas.filter((pessoa) => {
    return pessoa.idade > 20 && pessoa.profissao === 'Programador'
})

console.log(resultado1)

const resultado2 = pessoas.filter((pessoa) => {
    return pessoa.idade > 30 && pessoa.profissao === 'Jornalista'
})

console.log(resultado2)

const resultado3 = pessoas.filter((pessoa) => {
    return pessoa.idade < 29 && (pessoa.profissao === 'Jornalista' || pessoa.profissao === 'Programador')
})

console.log(resultado3)