const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))//faz ver o que foi escrito dentro do formulário

//        CRIAR     LER     ATUALIZAR   APAGAR
//CRUD -> CREATE,   READ,    UPDATE,    DELETE
//        POST      GET      PUT        DELETE
// http://meusite.com/ <- GET -> Entregue a página
// /profile/123456?
// campanha=googleads &
// nome_campanha=qualquer_nome

app.get('/', (requesicao, resposta) => {
    resposta.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button> olá mundão!!!! </button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (requesicao, resposta) => { //:idUsuarios? => com o interrogação você consegue acessar o /testes
    console.log(requesicao.params); // /profiles/3/2
    console.log(requesicao.query); // /profiles/?chave1=valor1&chave2=valor2 e etc
    resposta.send(requesicao.query.facebookprofile)//resposta.send(requesicao.params.idUsuarios) mostra o que é digitado no navegador (url) na página 
})

app.post('/', (requesicao, resposta) => {
    console.log(requesicao.body)
    resposta.send(`O que você me enviou foi: ${requesicao.body.nome}`);//o nome vem do input name="nome"
})

app.get('/contato', (requesicao, resposta) => {
    resposta.send('Segue meu número 021 99989-9999');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor esta sendo executado na porta 3000');
});