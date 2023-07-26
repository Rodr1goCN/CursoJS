import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '', // se esse campo não for enviado, o valor padrão dele é vazio
        validate: {
          len: {
            args: [3, 255], // mínimo e máximo de caracteres
            msg: 'Campo nome deve ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '', // se esse campo não for enviado, o valor padrão dele é vazio
        unique: {
          msg: 'Email já existe.',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '', // se esse campo não for enviado, o valor padrão dele é vazio
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '', // se esse campo não for enviado, o valor padrão dele é vazio
        validate: {
          len: {
            args: [6, 55], // mínimo e máximo de caracteres
            msg: 'A senha deve ter entre 6 e 55 caracteres.',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) { user.password_hash = await bcryptjs.hash(user.password, 8); }
    });

    return this;
  }
}
