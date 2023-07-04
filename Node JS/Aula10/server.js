const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');


app.use(express.urlencoded({extended:true}));//faz ver o que foi escrito dentro do formulário
app.set('views', path.resolve(__dirname, 'src', 'views'));//funciona também desse jeito './src/views'
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor esta sendo executado na porta 3000');
});