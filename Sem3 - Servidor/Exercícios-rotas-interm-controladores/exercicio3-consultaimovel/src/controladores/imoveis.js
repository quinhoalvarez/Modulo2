const imoveis = require('../bancodedados')

function todosImoveis(req, res) {
    res.send(imoveis)
}

function buscaImoveis(req, res) {
    const imovelEncontrado = imoveis.find((imovel) => {
        return imovel.id === Number(req.params.id)
    })

    res.send(imovelEncontrado)
}



module.exports = {
    todosImoveis,
    buscaImoveis
}
