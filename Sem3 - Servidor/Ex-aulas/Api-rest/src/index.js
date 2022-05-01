// Exercício resolvido
const express = require('express');

const app = express();

const rotasIndex = require('./rotas');
//refere-se as rotas do rotas.js, mas neste const pode ser usada qualquer nome

app.use(express.json())

app.use(rotasIndex)


// app.get('/', (req, res) => {
//     res.send('olaaa teste')
// })

app.listen(3000);