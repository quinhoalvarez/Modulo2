const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let i = 0
app.get('/jogadores', (req, res) => {


    if (i > jogadores.length - 1) {
        i = 0
    } else {
        i = i
    }
    res.send(`É a vez do ${jogadores[i]} jogar`);
    i++

})



app.listen(3000);
