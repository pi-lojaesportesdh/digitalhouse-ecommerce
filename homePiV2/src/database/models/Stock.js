'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stock.init({
    id:{ 
      type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
 
     product_id:{ 
       type:DataTypes.STRING,
     },
    status: {
      type:DataTypes.STRING,
    },

     amount: {
       type:DataTypes.INTEGER
     },
  }, {
    sequelize,
    modelName: 'Stock',
  });

//relationship between 'Stock' and 'product'
  Stock.associate = (models) => {
    Stock.hasOne(models.Product,
      { foreignKey: 'product_id', 
      as: 'stock_product' });
  };


  return Stock;
};