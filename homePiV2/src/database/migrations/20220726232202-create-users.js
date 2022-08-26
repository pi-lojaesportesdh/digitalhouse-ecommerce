"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.INTEGER,
      },
      birthDate: {
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING,
      },
      fone: {
        type: Sequelize.INTEGER,
      },
      adresse: {
        type: Sequelize.STRING,
      },
      cep: {
        type: Sequelize.INTEGER,
      },
      number: {
        type: Sequelize.INTEGER,
      },
      complement: {
        type: Sequelize.STRING,
      },
      reference: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      admin_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      user_sales: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
