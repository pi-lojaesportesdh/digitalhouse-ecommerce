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
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
     },
    name:{ type:DataTypes.STRING
    },
    password: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Admin',
  });
  
//relationship between 'Users' and 'Admin'
  Admin.associate = (models) => {
    Admin.hasOne(models.Users,
      { foreignKey: 'users_id', 
      as: 'admin_user' });
  };

  return Admin;
};