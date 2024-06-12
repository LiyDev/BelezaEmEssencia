const Sequelize = require('sequelize');
const db = require('../db/connection');

const VendaProduto = db.define('vendas', {
    id_venda:{
        type: Sequelize.INTEGER,
    },
    id_produto:{
        type: Sequelize.INTEGER,
    }
});
module.exports = VendaProduto;