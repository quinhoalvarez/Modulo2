// Temporalizador de jogos

const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"]

let indice = 0

function contador() {

    console.log(jogadores[indice]);
    indice++;

    if (indice >= jogadores.length) {
        clearInterval(id)
        console.log("Terminou a rodada")
    }

}

const id = setInterval(contador, (10000 / jogadores.length));