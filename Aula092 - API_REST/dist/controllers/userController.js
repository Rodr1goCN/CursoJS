"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);

// STORE
class UserController {
  async store(req, res) {
    try {
      const novoUser = await _user2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // O QUE FALTA FAZER
  // INDEX
  async index(req, res) {
    try {
      const usuarios = await _user2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(usuarios);
    } catch (e) {
      return res.json(null);
    }
  }

  // SHOW
  async show(req, res) {
    try {
      const usuario = await _user2.default.findByPk(req.params.id); // findByPk = encontrar pela primary key

      const { id, nome, email } = usuario;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const usuario = await _user2.default.findByPk(req.userId); // findByPk = encontrar pela primary key

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await usuario.update(req.body);
      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const usuario = await _user2.default.findByPk(req.userId); // findByPk = encontrar pela primary key

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await usuario.destroy();

      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
