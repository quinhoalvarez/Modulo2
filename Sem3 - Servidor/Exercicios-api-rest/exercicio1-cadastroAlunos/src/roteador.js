const express = require('express');
const alunos = require('./controladores/alunos');
const validacaoSenha = require('./intermediarios')
const rotas = express();


rotas.use(validacaoSenha)


rotas.get('/alunos', alunos.listarAlunos)
rotas.get('/alunos/:id', alunos.obterAlunos)
rotas.post('/alunos', alunos.criarAlunos)
rotas.delete('/alunos/:id', alunos.deletarAluno)


module.exports = rotas