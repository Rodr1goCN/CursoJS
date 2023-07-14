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

exports.editIndex = async function (requesicao, resposta) {
    if (!requesicao.params.id) return resposta.render('404');

    const contato = await Contato.buscaPorId(requesicao.params.id);
    if (!contato) return resposta.render('404')

    resposta.render('contato', { contato });
}

exports.edit = async function (req, res) {
    try {
        if (!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('/contato/index'));//redireciona de volta para a página de contato
            return; //return serve para a função parar aqui e não fazer um loop
        }

        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));//redireciona para a home, se não tiver logado
        return;
    } catch (e) {
        console.log(e);
        res.render('404')
    }
}

exports.delete = async function (requesicao, resposta){
    if (!requesicao.params.id) return resposta.render('404');

    const contato = await Contato.delete(requesicao.params.id);
    if (!contato) return resposta.render('404')

    requesicao.flash('success', 'Contato apagado com sucesso.');
    requesicao.session.save(() => resposta.redirect(`/`));
}