const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homercontroller');
const loginController = require('./src/controllers/loginController')

/* function meuMiddlewares(req, res, next) { //next seria a próxima requesição a ser chamada
    req.session = {nome: 'Rodrigo', sobrenome: 'Costa' }
    console.log();
    console.log('passei no seu middleware');
    console.log();
    next();
} */

//rotas da home
route.get('/', homeController.index);
/* route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.paginaInicial); */

//rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/index', loginController.login);
route.get('/login/logout', loginController.logout);

module.exports = route;


