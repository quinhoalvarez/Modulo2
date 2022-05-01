const express = require('express');
const instrutores = require('./controladores/instrutores');
const aulas = require('./controladores/aulas')
// const {listarInstrutores} = require('./controladores/instrutores'); - só q precisa alterar o rotas.get

const rotas = express();

//rotas.get('/instrutores', instrutores.listarIntrutores)
rotas.get('/instrutores', instrutores.listarInstrutores)
rotas.get('/instrutores/:id', instrutores.obterInstrutores)
rotas.post('/instrutores', instrutores.cadastrarInstrutores)
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor)
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);


rotas.post('/instrutores/:idInstrutor/aulas', aulas.cadastrarAulaInstrutor);


module.exports = rotas;