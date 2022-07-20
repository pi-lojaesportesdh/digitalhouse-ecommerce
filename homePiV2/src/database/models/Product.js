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
        nome: {
            type: DataTypes.STRING,
        },
        descricao: {
            type: DataTypes.STRING,
        },
        valor: {
            type: DataTypes.FLOAT,
        }
    },{
        sequelize,
        modelName: "Product",
        timeStamps:false
    });

    return Product;
};