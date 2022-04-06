// criar roteadores

const express = require('express');

const app = express()

const { todosImoveis, buscaImoveis } = require('./controladores/imoveis')


app.get('/imoveis', todosImoveis);
app.get('/imoveis/:id', buscaImoveis);

app.listen(8000);

