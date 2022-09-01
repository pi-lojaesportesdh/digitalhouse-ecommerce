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
      // OrderItem.associate = (models) => {
      //   OrderItem.belongsTo(models.Order, { foreignKey: "id" });
      // };
    }
  }
  OrderItem.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      quantity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
