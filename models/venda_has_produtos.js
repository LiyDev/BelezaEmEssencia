const Sequelize = require('sequelize');
const db = require('../db/connection');


const VendaProduto = db.define('venda_has_produtos', {
    id_venda:{
        type: Sequelize.INTEGER,
    },
    id_produto:{
        type: Sequelize.INTEGER,
    }
});


module.exports = VendaProduto;