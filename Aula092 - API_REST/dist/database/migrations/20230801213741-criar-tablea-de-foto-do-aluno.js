"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true, // Não precisa enviar o id, começa a contar do 1, 2, 3 e etc
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos', // ele referencia a tabela alunos no campo id
          key: 'id',
        },
        onDelete: 'SET NULL', // CASCADE-apaga todas as fotos que o aluno tem //SET NULL-se apagar o aluno não tem mais o id como referência
        onUpdate: 'CASCADE', // Se o primary key do registro pai for alterada, isso será refletido no registro filho
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('fotos');
  },
};
