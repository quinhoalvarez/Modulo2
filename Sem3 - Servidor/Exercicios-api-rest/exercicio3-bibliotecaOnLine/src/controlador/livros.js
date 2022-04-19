let { livros, controladorID } = require('../dados');

function listaLivros(req, res) {
    res.send(livros)
}

function acharLivros(req, res) {
    const buscarID = Number(req.params.id)

    if (isNaN(buscarID)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    const buscarLivro = livros.find((livro) => {
        return livro.id === Number(req.params.id)
    })

    if (!buscarLivro) {
        return res.send({ mensagem: "Não existe livro para o ID informado" })
    }

    return res.send(buscarLivro)
}

function addLivro(req, res) {
    const { titulo, autor, ano, numPaginas } = req.body

    const novoLivro = {
        id: controladorID++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(novoLivro)

    return res.json(novoLivro)
}

function substituirLivro(req, res) {
    const buscarID = Number(req.params.id)
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo) {
        return res.json({ mensagem: "O titulo deve ser informado" })
    }

    if (!autor) {
        return res.json({ mensagem: "O autor deve ser informado" })
    }

    if (!ano) {
        return res.json({ mensagem: "O anos deve ser informado" })
    }

    if (!numPaginas) {
        return res.json({ mensagem: "O número de páginas deve ser informado" })
    }

    if (isNaN(buscarID)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    let buscarLivro = livros.find((livro) => {
        return livro.id === Number(req.params.id)
    })

    if (!buscarLivro) {
        return res.send({ mensagem: "Não existe livro para o ID informado" })
    }

    buscarLivro.titulo = titulo
    buscarLivro.autor = autor
    buscarLivro.ano = ano
    buscarLivro.numPaginas = numPaginas


    // buscarLivro = {
    //     id: Number(req.params.id),
    //     titulo: titulo,
    //     autor: autor,
    //     ano: ano,
    //     numPaginas: numPaginas
    // }

    return res.send({ mensagem: "Livro substituído" })
}

function alterarLivro(req, res) {
    const buscarID = Number(req.params.id)
    const { titulo } = req.body


    if (isNaN(buscarID)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    let buscarLivro = livros.find((livro) => {
        return livro.id === Number(req.params.id)
    })

    if (!buscarLivro) {
        return res.send({ mensagem: "Não existe livro para o ID informado" })
    }


    buscarLivro.titulo = titulo


    return res.json({ mensagem: "Livro alterado" })
}

function removerLivro(req, res) {
    const buscarID = Number(req.params.id)

    if (isNaN(buscarID)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    let buscarLivro = livros.find((livro) => {
        return livro.id === Number(req.params.id)
    })

    if (!buscarLivro) {
        return res.send({ mensagem: "Não existe livro para o ID informado" })
    }

    livros = livros.filter((livro) => {
        return livro !== buscarLivro
    })

    return res.json({ mensagem: "Livro removido" })
    //return res.json({ mensagem: "Livro removido" })
}

module.exports = { listaLivros, acharLivros, addLivro, substituirLivro, alterarLivro, removerLivro }