function calcularIMC(altura, peso, callback) {
    let resultado = peso / (altura ** 2);

    if (resultado < 18) {
        console.log("Desnutrição");
    } else if (resultado < 25) {
        console.log("Normal");
    } else {
        console.log("Sobrepeso")
    }

    callback(resultado.toFixed(2));

}



calcularIMC(1.72, 74, function (x) {
    console.log(x)
});

