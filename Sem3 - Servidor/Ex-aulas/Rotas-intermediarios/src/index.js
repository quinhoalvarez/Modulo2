const express = require('express')

const app = express()


const carros = [
    { id: 1, nome: "corola", marca: "toyota", ano: "2021", cor: "preto" },
    { id: 2, nome: "uno", marca: "fiat", ano: "2010", cor: "azul" },
    { id: 3, nome: "celta", marca: "chevrolet", ano: "2011", cor: "prata" },
    { id: 4, nome: "ford ka", marca: "ford", ano: "2012", cor: "preto" },
    { id: 5, nome: "ranger", marca: "ford", ano: "2014", cor: "branco" },
    { id: 5, nome: "hilux", marca: "toyota", ano: "2015", cor: "prata" },
    { id: 5, nome: "argo", marca: "fiat", ano: "2021", cor: "branco" },
    { id: 5, nome: "hb20", marca: "hyundai", ano: "2020", cor: "branco" },
    { id: 5, nome: "creta", marca: "hyundai", ano: "2020", cor: "prata" },
    { id: 5, nome: "honda civic", marca: "honda", ano: "2019", cor: "preto" },
];

// app.get('/carros', (req, res) => {
//     res.send(carros)
// })

app.get('/carros', (req, res) => {
    const { marca, cor } = req.query
    let resultado = carros

    if (marca) {
        resultado = resultado.filter((carros) => {
            return carros.marca === marca
        })
    }

    if (cor) {
        resultado = resultado.filter((carros) => {
            return carros.cor === cor
        })
    }

    res.send(resultado)

})

// app.get('/carros', (req, res) => {
//     const { cor } = req.query
//     let resultado = carros

//     if (cor) {
//         resultado = carros.filter((carros) => {
//             return carros.cor === cor
//         })
//     }

//     res.send(resultado)

// })

app.get('/identificador/:id', (req, res) => {
    const carroEncontrado = carros.find((carros) => {
        return carros.id === Number(req.params.id)
    })

    res.send(carroEncontrado)
})



app.listen(3000);
