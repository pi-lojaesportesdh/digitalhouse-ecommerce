"use strict";
const { Model } = require("sequelize");
const Users = require("./Users");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      date: {
        type: DataTypes.DATE,
      },

      time: {
        type: DataTypes.TIME,
      },

      total: {
        type: DataTypes.FLOAT,
      },

      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );

  //relationship between 'Order' and 'Users'
  Order.associate = (models) => {
    Order.belongsTo(models.Users, { foreignKey: "id" });
  };

  Order.associate = (models) => {
    Order.hasMany(models.OrderItem, { foreignKey: "id" });
  };

  return Order;
};
