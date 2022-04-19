const express = require('express');
const rotasImp = require('./roteador');
const app = express();


app.use(express.json())

app.use(rotasImp);

app.listen(3000);
