"use strict";
const { Model } = require("sequelize");
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
  Sales.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      orderNumber: {
        type: DataTypes.INTEGER,
      },

      amount: {
        type: DataTypes.INTEGER,
      },

      date: {
        type: DataTypes.DATE,
      },

      time: {
        type: DataTypes.TIME,
      },

      price: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      modelName: "Sales",
    }
  );

  //relationship between 'Sales' and 'Shoppingcart'
  Sales.associate = (models) => {
    Sales.belongsToMany(models.ShoppingCart, {
      foreignKey: "sales_id",
      otherkey: "ShoppingCart_id",
      through: "name_id",
      as: "sales",
    });
  };

  //relationship between 'Sales' and 'FormOfPayment'
  Sales.associate = (models) => {
    Sales.hasOne(models.FormOfPayment, {
      foreignKey: "FormOfPayment_id",
      as: "payment_sales",
    });
  };

  //relationship between 'Sales' and 'Users'
  Sales.associate = (models) => {
    Sales.hasOne(models.Users, { foreignKey: "id", as: "users_sales" });
  };

  return Sales;
};
