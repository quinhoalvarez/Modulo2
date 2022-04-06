// RoundControllerEvolution.com


const express = require('express');

const app = express()

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];


let i = 0
app.get('/', (req, res) => {

    if (i >= jogadores.length) {
        i = 0
    } else {
        i = i
    }
    res.send(`É a vez de ${jogadores[i]} jogar!`)
    i++
})


app.get('/remover', (req, res) => {
    const { indice } = req.query

    if (indice < jogadores.length) {
        let resultado = jogadores.splice(indice, 1)
        res.send(jogadores)
    } else {
        res.send(`Não existe jogador no índice informado ${indice} para ser removido.`)
    }
})

app.get('/adicionar', (req, res) => {
    const { nome, indice } = req.query;

    if (indice == null) {
        let addJogadores = jogadores.push(nome)
    } else {
        addJogadores = jogadores.splice(indice, 0, nome)
    }

    if (indice >= jogadores.length) {
        return res.send(`O índice informado ${indice} não existe no array. Novo jogador não adicionado.`)
    }

    res.send(jogadores)

})


app.listen(8000);
