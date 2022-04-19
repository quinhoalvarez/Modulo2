let { alunos, controladorID } = require('../dados/bd-alunos')
const bdAlunos = require('../dados/bd-alunos')

function listarAlunos(req, res) {
    res.status(200).json(bdAlunos.alunos)
}

function obterAlunos(req, res) {
    const { id } = req.params

    const acharAluno = alunos.find((aluno) => {
        return aluno.id === Number(req.params.id)
    })


    if (!acharAluno) {
        return res.status(400).send('ID n encontrado')
    }

    res.status(200).send(acharAluno)
}

function criarAlunos(req, res) {
    //const { id } = req.params
    const { nome, sobrenome, idade, curso } = req.body

    if (nome.length === 0 || !nome.trim()) {
        return res.status(400).send('O nome é obrigatório')
    }


    if (sobrenome.length === 0 || !sobrenome.trim()) {
        return res.status(400).send('O sobrenome é obrigatório')
    }

    if (!idade) {
        return res.status(400).send('A idade é obrigatória')
    }

    if (idade < 18) {
        return res.status(400).send('A idade precisa ser maior que 18 anos')
    }

    if (curso.length === 0 || !curso.trim()) {
        return res.status(400).send('O curso é obrigatório')
    }

    const novoAluno = {
        id: controladorID++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(novoAluno)

    return res.status(401).json(novoAluno)
}

function deletarAluno(req, res) {
    const { id } = req.params

    const acharAluno = alunos.find((aluno) => {
        return aluno.id === Number(req.params.id)
    })

    if (!acharAluno) {
        return res.status(400).send('ID n encontradoo')
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id)
    })

    res.send(acharAluno)
}



module.exports = {
    listarAlunos,
    obterAlunos,
    criarAlunos,
    deletarAluno
}