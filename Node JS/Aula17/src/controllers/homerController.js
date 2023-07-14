const Contato = require('../models/contatoModel')

exports.index = async (requesicao, resposta) => {
    const contatos = await Contato.buscaContatos();
    resposta.render('index', { contatos });
}
