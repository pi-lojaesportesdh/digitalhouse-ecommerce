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
 
     road:{
       type:DataTypes.STRING,
     },
 
     number:{
       type:DataTypes.INTEGER,
     },
 
     cep:{
       type:DataTypes.INTEGER,
     },
 
     neighborhood:{
       type: DataTypes.STRING,
     },
 
     complement:{
       type:DataTypes.INTEGER
     },
     
 
  }, {
    sequelize,
    modelName: 'Adresse',
  });

  //relationship between 'users' and 'addresses'
  Adresse.associate = (models) => {
    Adresse.belongsTo(models.Users,
      { foreignKey: 'adresse_id', 
      as: 'users_id' });
  };


  return Adresse;
  
};