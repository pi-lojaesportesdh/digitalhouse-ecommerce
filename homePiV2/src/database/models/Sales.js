'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sales.init({
    id:{ 
      type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
 
     cliente:{ 
       type:DataTypes.STRING,
     },
 
     quantidade: {
       type:DataTypes.INTEGER,
     },
 
     data:{
       type: DataTypes.DATE,
     },
 
     horario: {
     type:DataTypes.TIME,
     },
 
     produto: {
     type:DataTypes.STRING,
     },
 
     valor:{ 
     type:DataTypes.FLOAT
     },



  }, {
    sequelize,
    modelName: 'Sales',
  });
  return Sales;
};