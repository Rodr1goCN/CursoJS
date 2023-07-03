const express = require('express');
const app = express();
const routes = require('./routes')


app.use(express.urlencoded({extended:true}))//faz ver o que foi escrito dentro do formulário
app.use(routes)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor esta sendo executado na porta 3000');
});