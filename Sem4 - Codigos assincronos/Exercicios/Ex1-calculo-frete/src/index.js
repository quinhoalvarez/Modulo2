const express = require('express');
const produtos = require('./bancoDeDados/produtos');
const { getStateFromZipcode } = require('utils-playground')

const app = express();


app.get('/produtos', (req, res) => {
    res.send(produtos)
})

// rota
app.get('/produtos/:idProduto', obterProdutos)

// controlador
function obterProdutos(req, res) {
    const { idProduto } = req.params

    const acharProdutos = produtos.find((produto) => {
        return produto.id === Number(req.params.idProduto)
    })

    if (!acharProdutos) {
        return res.status(404).json('Não existe produto com esse ID')
    }

    res.send(acharProdutos)
}


// rota
app.get('/produtos/:idProduto/frete/:cep', obterEstadoFrete)

// controlador
async function obterEstadoFrete(req, res) {
    const { idProduto, cep } = req.params

    const acharProdutos = produtos.find((produto) => {
        return produto.id === Number(req.params.idProduto)
    })

    if (!acharProdutos) {
        return res.status(404).json('Não existe produto com esse ID')
    }


    try {
        const estado = await getStateFromZipcode(cep)

        // BA, SE, AL, PE e PB
        if (estado === "BA" || estado === "SE" || estado === "AL" || estado === "PE" || estado === "PB") {
            const frete = acharProdutos.valor * 0.10

            return await res.send({
                produto:
                {
                    id: idProduto,
                    nome: acharProdutos.nome,
                    valor: acharProdutos.valor
                },
                estado,
                frete
            });
        } else if (estado === "SP" || estado === "RJ") {
            frete = acharProdutos.valor * 0.15

            return await res.send({
                produto:
                {
                    id: idProduto,
                    nome: acharProdutos.nome,
                    valor: acharProdutos.valor
                },
                estado,
                frete
            })
        } else {
            frete = acharProdutos.valor * 0.12

            return await res.send({
                produto:
                {
                    id: idProduto,
                    nome: acharProdutos.nome,
                    valor: acharProdutos.valor
                },
                estado,
                frete
            })
        }

    } catch (erro) {
        return res.status(500).json(`Deu erro: ${erro.message}`)
    }

};


app.listen(3000)
