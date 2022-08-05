'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FormOfPayments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        id: {
           type: Sequelize.INTEGER
      },

        ct_credit: {
            type: Sequelize.FLOAT,
        },
        ct_debt: {
            type: Sequelize.FLOAT,
        },
        money: {
            type: Sequelize.FLOAT,
        },
        pix: {
          type:Sequelize.INTEGER,
        },
        ticket:{
          type: Sequelize.INTEGER,
        },
        deposit:{
          type: Sequelize.STRING
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
    await queryInterface.dropTable('FormOfPayments');
  }
};