const express = require('express');
const rotas = express();

const livros = require('./controlador/livros')

rotas.get('/livros', livros.listaLivros);
rotas.get('/livros/:id', livros.acharLivros);
rotas.post('/livros', livros.addLivro);
rotas.put('/livros/:id', livros.substituirLivro);
rotas.patch('/livros/:id', livros.alterarLivro);
rotas.delete('/livros/:id', livros.removerLivro)


module.exports = rotas