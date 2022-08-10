'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      amount: {
        type:Sequelize.INTEGER,
      },
  
      date:{
        type: Sequelize.DATE,
      },
  
      time: {
      type:Sequelize.TIME,
      },
  
      price:{ 
      type:Sequelize.FLOAT
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
    await queryInterface.dropTable('Sales');
  }
};