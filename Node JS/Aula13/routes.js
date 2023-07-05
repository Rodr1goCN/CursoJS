const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homercontroller');
const contatoController = require('./src/controllers/contatoController')

/* function meuMiddlewares(req, res, next) { //next seria a próxima requesição a ser chamada
    req.session = {nome: 'Rodrigo', sobrenome: 'Costa' }
    console.log();
    console.log('passei no seu middleware');
    console.log();
    next();
} */

//rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;


