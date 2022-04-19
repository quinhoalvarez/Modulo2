let convidados = require('../dados/bancodados')

function listaDeConvidados(req, res) {
    const { nome } = req.query

    if (!nome) {
        return res.json(convidados)
    }

    const buscarConvidado = convidados.find((convidado) => {
        return convidado === nome
    })

    if (buscarConvidado) {
        return res.send({ mensagem: "Convidado presente." })
    } else {
        return res.send({ mensagem: "O convidado buscado não está presente na lista." })
    }
}

function adicionarConvidado(req, res) {
    const { nome } = req.body

    const buscarConvidado = convidados.find((convidado) => {
        return convidado === nome
    })

    if (buscarConvidado === nome) {
        return res.send({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    } else {
        convidados.push(nome)
        return res.json({ mensagem: "Convidado Adicionado" })
    }
}

function deletarConvidado(req, res) {
    const { nome } = req.params

    const buscarConvidado = convidados.find((convidado) => {
        return convidado === nome
    })

    // if (buscarConvidado < 0) {
    //     return res.send('Não tem esse nome')
    // }

    if (!buscarConvidado) {
        return res.send('Não tem esse nome')
    }

    convidados = convidados.filter((convidado) => {
        return convidado !== nome
    })

    // pode ser feito com o Splice tbm

    res.send({ mensagem: "Convidado removido com sucesso" })


}


module.exports = { listaDeConvidados, adicionarConvidado, deletarConvidado }