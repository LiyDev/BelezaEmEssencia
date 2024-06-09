const Sequelize = require('sequelize');
const db = require('../db/connection');

const Produto = db.define('produtos', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nome:{
        type: Sequelize.STRING,
    },
    descricao:{
        type: Sequelize.STRING,
    },
    preco:{
        type: Sequelize.REAL,
    },     
    imgsource:{
        type: Sequelize.STRING,
    }
});
module.exports = Produto;