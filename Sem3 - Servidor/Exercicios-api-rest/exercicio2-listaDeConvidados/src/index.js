const { json } = require('express');
const express = require('express');

const app = express();

const rotasImp = require('./rotas')

app.use(express.json())
app.use(rotasImp)

app.listen(3000);

