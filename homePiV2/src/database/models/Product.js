const {Model, DataTypes} = require('sequelize')

class Produto extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            valor: DataTypes.FLOAT
        }, {
            sequelize
        })
    }
}

module.exports = Produto;