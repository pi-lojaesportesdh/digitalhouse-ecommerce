"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      imgProduct: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Product",
      timeStamps: false,
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.OrderItem, { foreignKey: "product_id" });
  };

  return Product;
};
