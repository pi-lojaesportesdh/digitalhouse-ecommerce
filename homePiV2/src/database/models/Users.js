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
    nome: {
        type: DataTypes.STRING,
    },
    cpf: {
        type: DataTypes.INTEGER,
    },
    dataNascimento: {
        type: DataTypes.DATE,
    },
    email: {
      type:DataTypes.STRING
    },
    telefone:{
      type: DataTypes.INTEGER
    },
    endereco:{
      type: DataTypes.STRING
    },
    cep:{
      type: DataTypes.INTEGER
    },
    numero:{
      type: DataTypes.INTEGER
    },
    complemento:{
      type: DataTypes.STRING
    },
    referencia:{
      type: DataTypes.STRING
    },
    senha:{
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};