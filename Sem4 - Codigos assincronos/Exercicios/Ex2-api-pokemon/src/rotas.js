const express = require('express');
const rotas = express();

const { listaPokemon, acharPokemon } = require('./controladores/pokemons')


rotas.get('/listapokemons', listaPokemon)
rotas.get('/listapokemons/:idPokemon', acharPokemon);
rotas.get('/listapokemons/:name', acharPokemon);

module.exports = rotas