//some

const arquivos = ['xxx.bat', 'yyy.pdf', 'zzz.jpeg', 'aaa.bat']

/*
let resultado = ""

for (let item of arquivos) {
    if (item === '.bat') {
        resultado += item;
        break
    }
}

if (resultado === '.bat') {
    console.log("Virus detectado")
} else {
    console.log("Nenhum virus")
} */



// const teste = arquivos.some(verificarVirus)

const antiVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((x) => {
        const teste = x.indexOf('.bat');
        return teste !== -1
        // console.log(teste)
    });

    //console.log(resultado)

    if (resultado) {
        console.log('Virus det')
    } else {
        console.log('Nao tem virus')
    }
}


antiVirus(arquivos)


