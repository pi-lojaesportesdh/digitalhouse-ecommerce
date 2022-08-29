"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.associate = (models) => {
        Order.belongsTo(models.Users, { foreignKey: "id" });
      };

      Order.associate = (models) => {
        Order.hasMany(models.OrderItem, { foreignKey: "id" });
      };
    }
  }
  Order.init(
    {
      date: {
        type: DataTypes.STRING,
      },
      time: DataTypes.STRING,
      total: DataTypes.FLOAT,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
