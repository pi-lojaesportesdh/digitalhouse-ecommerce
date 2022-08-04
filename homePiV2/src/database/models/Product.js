'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models){

        }
    }
    Product.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.FLOAT
        }
    },{
        sequelize,
        modelName: "Product",
        timeStamps:false
    });

//relationship between 'Product' and 'Stock'
Product.associate = (models) => {
    Product.hasOne(models.Stock,
      { foreignKey: 'amount', 
      as: 'product_stock' });
  };

    
    return Product;
};