"use strict";/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {

  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'johndoe@email.com',
          password_hash: await bcryptjs.hash('123456', 8), // "8" => Ele representa o "salt" ou "salto" usado pelo algoritmo de hashing bcrypt para tornar o processo de hash mais seguro. O valor padrão do bcrypt é 10, e aumentá-lo para 12 ou 14 pode ser ainda mais seguro, mas também mais lento para gerar hashes.
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe 2',
          email: 'johndoe2@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe 3',
          email: 'johndoe3@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
