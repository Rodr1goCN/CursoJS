exports.index = (requesicao, resposta) => {
    // console.log(requesicao.session.usuario) //mostra usuário que ficará logado por 7 dias

    //console.log(requesicao.flash('error'), requesicao.flash('success'), requesicao.flash('info'));//mostra no terminal a mensagem, porém só aparecera uma única vez
    
    //console.log(requesicao.flash('error'), requesicao.flash('success'), requesicao.flash('info')) // para verificar as msg criadas (até a página ser atualizada)

    resposta.render('index');
    return; //se não tiver nenhum middleware, pode usar o return para parar
}

/* exports.trataPost = (requesicao, resposta) => {
    resposta.send(requesicao.body);
    return;
}
 */
