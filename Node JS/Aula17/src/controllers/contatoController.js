const Contato = require('../models/contatoModel');

exports.index = (requesicao, resposta) => {
    resposta.render('contato', {
        contato: {}
    });
};

exports.register = async (requesicao, resposta) => {
    try {
        const contato = new Contato(requesicao.body);
        await contato.register();

        if (contato.errors.length > 0) {
            requesicao.flash('errors', contato.errors);
            requesicao.session.save(() => resposta.redirect('/contato/index'));//redireciona de volta para a página de contato
            return; //return serve para a função parar aqui e não fazer um loop
        }

        requesicao.flash('success', 'Contato registrado com sucesso.');
        requesicao.session.save(() => resposta.redirect(`/contato/index/${contato.contato._id}`));//redireciona para a home, se não tiver logado
        return; //return serve para a função parar aqui e não fazer um loop
    } catch (e) {
        console.log(e);
        return resposta.render('404');
    }
};

exports.editIndex = async function(requesicao, resposta) {
    if(!requesicao.params.id) return resposta.render('404');

    const contato = await Contato.buscaPorId(requesicao.params.id);
    if(!contato) return resposta.render('404')

    resposta.render('contato', {contato});

}