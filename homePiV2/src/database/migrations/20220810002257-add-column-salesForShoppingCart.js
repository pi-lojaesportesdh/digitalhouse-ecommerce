'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("sales", "shoppingCart_id", {
      type:Sequelize.INTEGER,
      references: { model: 'shoppingCarts', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,

    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("shoppingCart_id")
  }
};
