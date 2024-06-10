const Sequelize = require('sequelize');
const db = require('../db/connection');

const Cliente = db.define('clientes', {
    id_cliente:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,

    },
    data_nascimento:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
    },     
    telefone:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco:{
        type: Sequelize.STRING,
    }
});
module.exports = Cliente;