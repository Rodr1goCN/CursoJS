exports.paginaInicial = (requesicao, resposta) => {
    resposta.render('index')
}

exports.trataPost = (requesicao, resposta) => {
    resposta.send('Olha, estou funcioando como POST');
}