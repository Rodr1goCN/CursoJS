const express = require('express');
const app = express();

//        CRIAR     LER     ATUALIZAR   APAGAR
//CRUD -> CREATE,   READ,    UPDATE,    DELETE
//        POST      GET      PUT        DELETE
// http://meusite.com/ <- GET -> Entregue a página

app.get('/', (requesicao, resposta) => {
    resposta.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button> olá mundão!!!! </button>
    </form>
    `);
});

app.post('/', (requesicao, resposta) => {
    resposta.send('Recebi o formulário')
})

app.get('/contato', (requesicao, resposta) => {
    resposta.send('Segue meu número 021 99989-9999')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor esta sendo executado na porta 3000');
});