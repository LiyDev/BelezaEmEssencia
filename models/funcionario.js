const Sequelize = require('sequelize');
const db = require('../db/connection');

const Funcionario = db.define('funcionarios', {
    id_funcionario:{
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
    },
    cargo:{
        type: Sequelize.STRING,
    }
});
module.exports = Funcionario;