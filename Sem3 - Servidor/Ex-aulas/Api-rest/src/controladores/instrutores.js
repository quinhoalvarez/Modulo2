// aqui a ideia é colocar os controladores das rotas - a lógica / condicoes de cada rota

let { instrutores, identificadorInstrutor } = require('../bancodedados')

function listarInstrutores(req, res) {
    return res.status(200).json(instrutores)
}

function obterInstrutores(req, res) {
    const { id } = req.params;
    //poderia usar instrutores.id? Não.

    const procuraInstrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(req.params.id)
        // return instrutor.id === Number(id)
    })

    if (!procuraInstrutor) {
        return res.status(404).json('Não existe instrutor com esse ID')
    }

    return res.send(procuraInstrutor)

}

function cadastrarInstrutores(req, res) {
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' });
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'O email é obrigatório' });
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true
    }

    instrutores.push(instrutor);

    return res.status(201).json(instrutor);
}

function atualizarInstrutor(req, res) {
    const { id } = req.params
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' });
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'O email é obrigatório' });
    }

    const procuraInstrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(req.params.id)
        // return instrutor.id === Number(id)
    })

    if (!procuraInstrutor) {
        return res.status(404).json('Não existe instrutor com esse ID')
    }

    procuraInstrutor.nome = nome;
    procuraInstrutor.email = email;
    procuraInstrutor.status = status;

    return res.status(203).json(procuraInstrutor)

}

function atualizarStatusInstrutor(req, res) {
    const { id } = req.params
    const { status } = req.body;

    const procuraInstrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(req.params.id)
        // return instrutor.id === Number(id)
    })

    if (!procuraInstrutor) {
        return res.status(404).json('Não existe instrutor com esse ID')
    }

    procuraInstrutor.status = status;

    return res.status(204).send(procuraInstrutor)
}

function excluirInstrutor(req, res) {
    const { id } = req.params

    const procuraInstrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(req.params.id)
        // return instrutor.id === Number(id)
    })

    if (!procuraInstrutor) {
        return res.status(404).json('Não existe instrutor com esse ID')
    }

    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id);
    });

    return res.status(204).send();

}



module.exports = {
    listarInstrutores,
    obterInstrutores,
    cadastrarInstrutores,
    atualizarInstrutor,
    atualizarStatusInstrutor,
    excluirInstrutor
}
