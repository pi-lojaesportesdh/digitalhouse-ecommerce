"use strict";
const { Model } = require("sequelize");
const Sales = require("./Order");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      cpf: {
        type: DataTypes.INTEGER,
      },
      birthDate: {
        type: DataTypes.DATE,
      },
      email: {
        type: DataTypes.STRING,
      },
      fone: {
        type: DataTypes.INTEGER,
      },
      adresse: {
        type: DataTypes.STRING,
      },
      cep: {
        type: DataTypes.INTEGER,
      },
      number: {
        type: DataTypes.INTEGER,
      },
      complement: {
        type: DataTypes.STRING,
      },
      reference: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );

  Users.associate = (models) => {
    Users.hasMany(models.Order, {
      foreignKey: "user_id",
    });
  };

  return Users;
};
