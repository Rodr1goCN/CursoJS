require('dotenv').config(); //Não deixa que apareça no github o usuário e senha

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei no MongoDB')
        app.emit('Pronto!')
    })
    .catch(e=> console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewaresGlobal, outroMiddleware } = require('./src/middlewares/middlewares')


app.use(express.urlencoded({ extended: true }));//faz ver o que foi escrito dentro do formulário

app.set('views', path.resolve(__dirname, 'src', 'views'));//funciona também desse jeito './src/views'

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine', 'ejs');

//nosso próprio middlewares
app.use(middlewaresGlobal);
app.use(outroMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor esta sendo executado na porta 3000');
    });
});
