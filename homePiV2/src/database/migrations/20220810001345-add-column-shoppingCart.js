'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("shoppingCarts", "product_idd", {
      type:Sequelize.INTEGER,
      references: { model: 'Products', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,

    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("product_idd")
  }
};

