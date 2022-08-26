"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,

      order_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },

      product_id: {
        type: DataTypes.INTEGER,
      },

      quantity: {
        type: DataTypes.INTEGER,
      },

      price: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      modelName: "OrderItem",
    }
  );

  //relationship between 'OrderItem' and 'products'
  OrderItem.associate = (models) => {
    OrderItem.hasOne(models.Product, {
      foreignKey: "id",
      as: "product_id",
    });
  };

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Order, {
      foreignKey: "id",
    });
  };

  return OrderItem;
};
