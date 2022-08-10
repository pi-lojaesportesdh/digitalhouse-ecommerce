'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Adresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      road:{
        type:Sequelize.STRING,
      },
  
      number:{
        type:Sequelize.INTEGER,
      },
  
      cep:{
        type:Sequelize.INTEGER,
      },
  
      neighborhood:{
        type: Sequelize.STRING,
      },
  
      complement:{
        type:Sequelize.INTEGER
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
    await queryInterface.dropTable('Adresses');
  }



};