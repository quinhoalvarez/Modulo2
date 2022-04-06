// colocar aqui as funções

const somar = ((req, res) => {
    const { num1, num2 } = req.query
    let resultado = Number(num1) + Number(num2)

    res.send(`Resposta é :${resultado}`)

    // resultado = Number(req.query.num1) + Number(req.query.num2)
    // res.send(`Resposta: ${resultado}`);
});

const subtrair = ((req, res) => {
    const { num1, num2 } = req.query
    let resultado = Number(num1) - Number(num2)

    res.send(`Resposta é :${resultado}`)
    //res.send(String(resultado));

});

const multiplicar = ((req, res) => {
    const { num1, num2 } = req.query
    let resultado = Number(num1) * Number(num2)

    res.send(`Resposta é :${resultado}`)
});

const dividir = ((req, res) => {
    const { num1, num2 } = req.query
    let resultado = Number(num1) / Number(num2)

    res.send(`Resposta é :${resultado}`)
});


module.exports = { somar, subtrair, multiplicar, dividir };
