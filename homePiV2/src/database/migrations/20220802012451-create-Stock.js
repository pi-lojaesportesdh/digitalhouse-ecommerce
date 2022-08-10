'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stock', {
      
       product_id:{ 
         type:Sequelize.STRING,
       },
       status: {
        type:Sequelize.STRING
      },
       amount: {
         type:Sequelize.INTEGER,
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
    await queryInterface.dropTable('Stock');
  }
};