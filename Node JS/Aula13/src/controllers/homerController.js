const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo:'Um título de testes',
    descricao: 'Uma descrição de teste'
})
.then(dados => console.log(dados))
.catch(e => console.log(e));

exports.paginaInicial = (requesicao, resposta) => {
    resposta.render('index')
    return; //se não tiver nenhum middleware, pode usar o return para parar
}

exports.trataPost = (requesicao, resposta) => {
    resposta.send(requesicao.body);
    return;
}

