'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("Stock", "product_id", {
      type:Sequelize.INTEGER,
      references: { model: 'Products', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,

    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("product_id")
  }
};
