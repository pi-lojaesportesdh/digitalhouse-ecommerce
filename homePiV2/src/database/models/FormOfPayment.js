'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormOfPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FormOfPayment.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ct_credit: {
        type: DataTypes.FLOAT,
    },
    ct_debt: {
        type: DataTypes.FLOAT,
    },
    money: {
        type: DataTypes.FLOAT,
    },
    pix: {
      type:DataTypes.INTEGER,
    },
    ticket:{
      type: DataTypes.INTEGER,
    },
    deposit:{
      type: DataTypes.STRING
    },
   

  }, {
    sequelize,
    modelName: 'FormOfPayment',
  });

  //relationship between 'FormOfPayment' and 'Sales'
  FormOfPayment.associate = (models) => {
    FormOfPayment.hasOne(models.Sales,
      { foreignKey: 'sales_id', 
        as: 'sales_payment' });
  };


  return FormOfPayment;
};