'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    cpf: {
        type: DataTypes.INTEGER,
    },
    birthDate: {
        type: DataTypes.DATE,
    },
    email: {
      type:DataTypes.STRING,
    },
    fone:{
      type: DataTypes.INTEGER,
    },
    adresse:{
      type: DataTypes.STRING,
    },
    cep:{
      type: DataTypes.INTEGER,
    },
    number:{
      type: DataTypes.INTEGER,
    },
    complement:{
      type: DataTypes.STRING,
    },
    reference:{
      type: DataTypes.STRING,
    },
    password:{
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Users',
  });

  //relationship between 'Users' and 'Addresses'
  /*Users.associate = (models) => {
    Users.hasMany(models.Adresse,
      { foreignKey: 'users_id', 
      as: 'Adresses' });
  };*/

//relationship between 'Users' and 'Admin'
  Users.associate = (models) => {
    Users.hasOne(models.Admin,
      { foreignKey: 'admin_id', 
      as: 'trustee' });
  };

//relationship between 'Users' and 'ShoppingCart'
Users.associate = (models) => {
  Users.belongsToMany(models.ShoppingCart,
    { 
      foreignKey: 'Users_id', 
      otherkey: 'ShoppingCart_id',
      through: 'Users_ShoppingCart',
      as: 'choosing_item' 
    });
};

  
  return Users;
};