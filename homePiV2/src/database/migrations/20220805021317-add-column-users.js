'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("Users", "admin_idd", {
      type:Sequelize.INTEGER,
      references: { model: 'Admins', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,

    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("admin_idd") 

  }
};
