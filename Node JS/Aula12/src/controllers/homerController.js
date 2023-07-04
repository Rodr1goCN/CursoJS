exports.paginaInicial = (requesicao, resposta) => {
    resposta.render('index')
    return; //se não tiver nenhum middleware, pode usar o return para parar
}

exports.trataPost = (requesicao, resposta) => {
    resposta.send(requesicao.body);
    return;
}