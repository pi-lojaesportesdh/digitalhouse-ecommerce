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
    ct_credito: {
        type: DataTypes.FLOAT,
    },
    ct_debito: {
        type: DataTypes.FLOAT,
    },
    dinheiro: {
        type: DataTypes.FLOAT,
    },
    pix: {
      type:DataTypes.INTEGER,
    },
    boleto:{
      type: DataTypes.INTEGER,
    },
    deposito:{
      type: DataTypes.STRING,
    },
   

  }, {
    sequelize,
    modelName: 'FormOfPayment',
  });
  return FormOfPayment;
};