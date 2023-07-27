import User from '../models/user';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
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
      const usuarios = await User.findAll();
      console.log('USER ID', req.userId);
      console.log('USER EMAIL', req.userEmail);
      return res.json(usuarios);
    } catch (e) {
      return res.json(null);
    }
  }

  // SHOW
  async show(req, res) {
    try {
      const usuario = await User.findByPk(req.params.id); // findByPk = encontrar pela primary key
      return res.json(usuario);
    } catch (e) {
      return res.json(null);
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      if (req.param.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const usuario = await User.findByPk(req.params.id); // findByPk = encontrar pela primary key

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await usuario.update(req.body);

      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      if (req.param.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const usuario = await User.findByPk(req.params.id); // findByPk = encontrar pela primary key

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

export default new UserController();
