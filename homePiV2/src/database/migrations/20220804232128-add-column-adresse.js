'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("Adresses", "user_id", {
      type:Sequelize.INTEGER,
      references: { model: 'Users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,

    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("user_id") 

  }
};
