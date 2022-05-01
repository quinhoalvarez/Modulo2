const { listarPokemons, detalharPokemon } = require('utils-playground')

async function listaPokemon(req, res) {

    const listaPokemon = await listarPokemons()

    res.send(listaPokemon.results)
};


async function acharPokemon(req, res) {
    const { } = req.params

    try {
        const acharPokemon = await detalharPokemon(1)

        res.send({
            id: acharPokemon.id,
            name: acharPokemon.name,
            height: acharPokemon.height,
            weight: acharPokemon.weight,
            base_experience: acharPokemon.base_experience,
            forms: acharPokemon.forms,
            abilities: acharPokemon.abilities,
            species: acharPokemon.species
        })
    } catch (erro) {
        res.status(500).json(`Deu erro: ${erro.message}`)
    }
}

module.exports = {
    listaPokemon,
    acharPokemon
}