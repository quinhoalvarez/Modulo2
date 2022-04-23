const express = require('express');
const app = express();

const { buscarEndereco } = require('utils-playground');
const fs = require('fs/promises');


app.get('/enderecos', async (req, res) => {

    try {
        const endereco = await buscarEndereco("40140020")

        if (!endereco) {
            return res.status(400).json('Endereço não encontrado')
        }

        const registroEnderecos = await fs.readFile('./src/enderecos.json')
        const formatojs = JSON.parse(registroEnderecos)

        formatojs.push({ endereco })

        fs.writeFile('./src/enderecos.json', JSON.stringify(endereco))

        res.send(endereco)

    } catch (erro) {
        res.status(404).json(`Deu erro: ${erro.message}`)
    }
})

app.listen(3000)
