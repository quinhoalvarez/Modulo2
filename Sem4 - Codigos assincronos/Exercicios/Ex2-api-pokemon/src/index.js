const express = require('express')
const app = express()

//const { listarPokemons, a, detalharPokemon } = require('utils-playground')

const rotas = require('./rotas')

app.use(rotas)

app.listen(8000);



//rota
// app.get('/listapokemons', listaPokemon)

//controlador
// async function listaPokemon(req, res) {

//     const listaPokemon = await listarPokemons()

//     res.send(listaPokemon.results)
// };

// app.get('/listapokemons/:idPokemon', acharPokemon);
// app.get('/listapokemons/:name', acharPokemon);

// async function acharPokemon(req, res) {
//     const { } = req.params

//     const acharPokemon = await detalharPokemon(1)

//     res.send({
//         id: acharPokemon.id,
//         name: acharPokemon.name,
//         height: acharPokemon.height,
//         weight: acharPokemon.weight,
//         base_experience: acharPokemon.base_experience,
//         forms: acharPokemon.forms,
//         abilities: acharPokemon.abilities,
//         species: acharPokemon.species
//     })
// }



