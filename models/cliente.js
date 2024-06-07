const Sequelize = require('sequelize');
const db = require('../db/connection');

const Cliente = db.define('clientes', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nome:{
        type: Sequelize.STRING,
    },
    data_nascimento:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },     
    telefone:{
        type: Sequelize.STRING,
    },
    endereco:{
        type: Sequelize.STRING,
    }
});
module.exports = Cliente;