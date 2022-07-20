const Sequelize = require('sequelize');
const dbConfig = require('./config/config');
const Produto = require('./models/Product');

const connection = new Sequelize(dbConfig);

Produto.init(connection)

module.exports = connection;