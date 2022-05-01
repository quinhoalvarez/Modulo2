const dados = require('../dados');
const fs = require('fs/promises');

function listaProdutos(req, res) {
    res.json(dados)
};

async function vendaProdutos(req, res) {
    const { produto_id, quantidade } = req.body

    const encontrarID = dados.find((produto) => {
        return produto.id === produto_id
    })

    if (!encontrarID) {
        return res.status(400).json('Produto não existe, meu caro')
    }


    const vendas = await fs.readFile('./src/venda.json')
    const formatojs = JSON.parse(vendas)

    formatojs.vendas.push({
        produto: encontrarID,
        quantidade: quantidade
    })

    await fs.writeFile('./src/venda.json', JSON.stringify(formatojs))


    return res.status(201).json("Venda registrada com sucesso")
}

module.exports = { listaProdutos, vendaProdutos }