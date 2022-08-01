'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adresse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Adresse.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
     autoIncrement: true
     },
 
     rua:{
  type:DataTypes.STRING,
     },
 
     numero:{
       type:DataTypes.INTEGER,
     },
 
     cep:{
       type:DataTypes.INTEGER,
     },
 
     bairro:{
       type: DataTypes.STRING,
     },
 
     complemento:{
       type:DataTypes.STRING
     }
 

  }, {
    sequelize,
    modelName: 'Adresse',
  });
  return Adresse;
};