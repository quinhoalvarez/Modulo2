
function validacaoSenha(req, res, next) {
    //console.log('passei no primeiro intermediario');

    const { senha } = req.query;

    if (!senha) {
        return res.send('A senha n foi informada')
    }
    if (senha !== 'cubos123') {
        return res.send('A senha está incorreta')
    }

    next()
};

module.exports = validacaoSenha