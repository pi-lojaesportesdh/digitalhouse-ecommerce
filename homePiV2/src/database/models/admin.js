'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Admin',
  });
  
//relationship between 'Users' and 'Admin'
  Admin.associate = (models) => {
    Admin.hasOne(models.Users,
      { foreignKey: 'id', 
      as: 'admin_user' });
  };

  return Admin;
};