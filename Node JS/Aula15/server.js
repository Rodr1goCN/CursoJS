require('dotenv').config(); //Não deixa que apareça no github o usuário e senha

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e=> console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')

const routes = require('./routes');
const path = require('path');
const { middlewaresGlobal, outroMiddleware } = require('./src/middlewares/middlewares')


app.use(express.urlencoded({ extended: true }));//faz ver o que foi escrito dentro do formulário

app.set('views', path.resolve(__dirname, 'src', 'views'));//funciona também desse jeito './src/views'

const sessionOptions = session({
    secret: 'Pode ser qualquer coisa',
    //store: new MongoStore ({ mongooseConnection: mongoose.connection}),
    resave: false, 
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //tempo q vai durar o cookie (7dias)
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING})
});

app.use(sessionOptions);
app.use(flash());

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine', 'ejs');

//nosso próprio middlewares
app.use(middlewaresGlobal);
app.use(outroMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
      console.log('Acessar http://localhost:3000');
      console.log('Servidor executando na porta 3000');
    });
  });
