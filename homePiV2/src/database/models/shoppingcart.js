'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShoppingCart.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShoppingCart',
  });


 //relationship between 'Shoppingcart' and 'Sales'
 ShoppingCart.associate = (models) => {
  ShoppingCart.belongsToMany(models.Sales,
    { 
      foreignKey: 'shoppingcart_id', 
      otherkey: 'sales_id',
      through: 'client_sales',
      as: 'go_Buy' 
    });
};

 //relationship between 'Shoppingcart' and 'Users'
 ShoppingCart.associate = (models) => {
  ShoppingCart.belongsToMany(models.Users,
    { 
      foreignKey: 'shoppingcart_id', 
      otherkey: 'users_id',
      through: 'ShoppingCart_users',
      as: 'added_item' 
    });
};


  return ShoppingCart;
};