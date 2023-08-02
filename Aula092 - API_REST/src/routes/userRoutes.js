import { Router } from 'express';
import userController from '../controllers/userController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir \/
router.get('/', userController.index); // Lista usuários
router.get('/:id', userController.show); // Lista usuário

router.post('/', loginRequired, userController.store); // Criação de usuário
router.put('/', loginRequired, userController.update); // Atualização de usuário
router.delete('/', loginRequired, userController.delete); // Deletar usuário

export default router;

/*
// index => lista todos os usuários => GET
// store/create => cria um novo usuário => POST
// delete => apaga um usuário => DELETE
// show => mostra um usuário => GET
// update => atualiza um usuário => PATCH ou PUT
*/
