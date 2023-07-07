require('dotenv').config(); //Não deixa que apareça no github o usuário e senha

const express = require('express');
const app = express();

//banco de dados // criação de uma AGENDA
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e=> console.log(e));

const session = require('express-session');//identificar um navegador de um cliente e salvar um cookie no computador do cliente
const MongoStore = require('connect-mongo');//salvar as sessões na base de dados
const flash = require('connect-flash')//mensagens alto destrutivas (vista somente uma vez)
const routes = require('./routes');//rotas da aplicação (/home /contato /página inicial e etc)
const path = require('path');
const helmet = require('helmet');//recomendação do express para instala-lo
const csrf = require('csurf');//todos os csrf são csrfTokens para formulários, para não sofrer atqs (segurança)
const { middlewaresGlobal, checkCsrfError, outroMiddleware, csrfMiddleware } = require('./src/middlewares/middlewares');// middlewares são funções que são executadas na rota. ex.: verificar se um usuário esta logado


app.use(helmet());
app.use(express.urlencoded({ extended: true }));//faz ver o que foi escrito dentro do formulário
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));//faz acessar todos os arquivos estáticos. ex: img, css, javascript e etc

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

app.set('views', path.resolve(__dirname, 'src', 'views'));//funciona também desse jeito './src/views'

app.set('view engine', 'ejs'); //faz renderizar o html (ejs)

app.use(csrf());
//nosso próprio middlewares
app.use(middlewaresGlobal);
app.use(checkCsrfError);
app.use(outroMiddleware);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
      console.log('Acessar http://localhost:3000');
      console.log('Servidor executando na porta 3000');
    });
  });
