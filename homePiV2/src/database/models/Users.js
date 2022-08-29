"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.associate = (models) => {
        Users.hasMany(models.Order, {
          foreignKey: "user_id",
        });
      };
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      cpf: DataTypes.INTEGER,
      birthDate: DataTypes.DATE,
      email: DataTypes.STRING,
      fone: DataTypes.INTEGER,
      adresse: DataTypes.STRING,
      cep: DataTypes.INTEGER,
      number: DataTypes.INTEGER,
      complement: DataTypes.STRING,
      reference: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
