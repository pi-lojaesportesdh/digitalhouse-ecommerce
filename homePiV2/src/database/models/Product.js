module.exports = (sequelize, DataTypes) => {
    let Product = sequelize.define('Produto', {
        id_produto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
        },
        descricao: {
            type: DataTypes.STRING,
        },
        valor: {
            type: DataTypes.FLOAT,
        }
    },{
        tableName:'produto',
        timeStamps:false
    });

    return Product
}