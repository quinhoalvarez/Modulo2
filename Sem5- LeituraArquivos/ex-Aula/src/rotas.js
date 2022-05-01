const express = require('express');
const rotas = express();
const produtos = require('./controladores/produtos')


rotas.get('/produtos', produtos.listaProdutos)
rotas.post('/produtos', produtos.vendaProdutos)


module.exports = rotas