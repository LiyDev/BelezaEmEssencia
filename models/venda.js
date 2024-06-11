const Sequelize = require('sequelize');
const db = require('../db/connection');

const Venda = db.define('vendas', {
    id_venda:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    id_cliente:{
        type: Sequelize.INTEGER,
    },
    id_funcionario:{
        type: Sequelize.INTEGER,
    },
    data_da_venda:{
        type: Sequelize.STRING,
    },     
});
module.exports = Venda;