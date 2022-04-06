// cronometro

const express = require('express');
const res = require('express/lib/response');

const app = express()

let contador = 0;
let minuto = 0
let segundos = 0

let pausaCronometro = false

// colocar dentro de uma funcao para poder chamar nos próximos recursos
function cronometro() {
    const idSetInterval = setInterval(() => {
        if (pausaCronometro === true) {
            clearInterval(idSetInterval);
        } else {
            // adicionanto tempo ao contador
            contador++
        }
        // ajustando a impressão dos minutos e segundos
        if (contador < 60) {
            segundos = contador
        } else {
            segundos = contador % 60
        };
        minuto = Math.floor(contador / 60)

    }, 1000)
}




app.get('/', (req, res) => {
    res.send(`O cronômetro está em: 
    ${minuto.toString().padStart(2, 0)} minutos e 
    ${segundos.toString().padStart(2, 0)} segundos`)
})

app.get('/iniciar', (req, res) => {
    if (contador > 0) {
        res.send(`O cronometro já foi iniciado jovem, zero o msm`)
    } else {
        cronometro()
        res.send(`Cronometro iniado`)
    }
})

app.get('/pausar', (req, res) => {
    pausaCronometro = true
    cronometro()
    res.send(`Cronometro pausado`)
})

app.get('/continuar', (req, res) => {
    if (pausaCronometro = true) {
        pausaCronometro = false
        cronometro()
    }
    res.send(`Cronometro continuado`)
})

app.get('/zerar', (req, res) => {
    if (contador > 0) {
        contador = 0
        minuto = 0
        segundos = 0
        pausaCronometro = true
        cronometro()
    }

    res.send(`Cronometro zerado`)
})


app.listen(8000);






