const { response } = require("express");

exports.paginaInicial = (requesicao, resposta) => {
    resposta.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button> olá mundão!!!! </button>
    </form>
    `);
}

exports.trataPost = (requesicao, resposta) => {
    resposta.send('Olha, estou funcioando como POST');
}