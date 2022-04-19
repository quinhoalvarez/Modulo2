const express = require('express');
const rotas = express()

const convidados = require('./controladores/convidados')

rotas.get('/convidados', convidados.listaDeConvidados)
rotas.post('/convidados', convidados.adicionarConvidado)
rotas.delete('/convidados/:nome', convidados.deletarConvidado)


module.exports = rotas
