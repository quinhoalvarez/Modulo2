function teste(callback) {
    const nome = "Marco";
    const idade = 32;
    callback(nome, idade);
}

function mensagem(nome, idade) {
    //console.log(nome, idade);

    console.log(`O nome é ${nome}`);


    if (idade) {
        const ano = new Date().getFullYear();
        console.log(`Nasceu em ${ano - idade}`);
    }
}

teste(mensagem);