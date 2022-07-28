'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cpf: {
        type:Sequelize.INTEGER,
      },
      dataNascimento: {
          type: Sequelize.DATE,
      },
      email: {
        type:Sequelize.STRING
      },
      telefone:{
        type: Sequelize.INTEGER
      },
      endereco:{
        type: Sequelize.STRING
      },
      cep:{
        type: Sequelize.INTEGER
      },
      numero:{
        type: Sequelize.INTEGER
      },
      complemento:{
        type: Sequelize.STRING
      },
      referencia:{
        type: Sequelize.STRING
      },
      senha:{
        type: Sequelize.INTEGER
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};