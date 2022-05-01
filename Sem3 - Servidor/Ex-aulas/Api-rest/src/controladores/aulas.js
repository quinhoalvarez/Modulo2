let { instrutores, identificadorInstrutor, identificadorAula, aulas } = require('../bancodedados')

function cadastrarAulaInstrutor(req, res) {
    const { idInstrutor } = req.params
    const { titulo, descricao } = req.body;

    // validar se as informacoes obrigatorias foram passadas
    if (!titulo) {
        return res.status(400).json({ mensagem: 'O titulo é obrigatório' });
    }

    if (!descricao) {
        return res.status(400).json({ mensagem: 'A descricao é obrigatória' });
    }

    // verificar se o instrutor existe
    const existeInstrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(req.params.idInstrutor)
        // return instrutor.id === Number(id)
    })

    if (!existeInstrutor) {
        return res.status(404).json('Não existe instrutor com esse ID')
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo: titulo,
        descricao: descricao
    }

    aulas.push(aula);

    return res.status(201).json(aula)

}


module.exports = {
    cadastrarAulaInstrutor
}