const express = require('express');
const router = express.Router();
const Funcionario = require('../models/funcionario');


router.get("/", (req, res)=>{
    Funcionario.findAll({order:[
        ['nome', 'ASC']
    ]})
    .then(funcionarios =>{
        res.render('funcionarios', {
            funcionarios
        });
    }); 
});

router.get("/editar/:id", (req, res) => Funcionario.findOne({
    where: {id_funcionario: req.params.id}
}).then(funcionarios =>{
    res.render('editarfuncionario', {
        funcionarios
    });
}).catch(err => console.log(err)));

router.get("/add", (req, res)=>{
    res.render('addfuncionario');
});

router.post('/add', (req, res) => {
    let {nome, data_nascimento, email, telefone, endereco, cargo} = req.body;

    Funcionario.create({
        nome,
        data_nascimento,
        email,
        telefone,
        endereco,
        cargo
    })
    .then(() => res.redirect('/funcionarios'))
    .catch(err => console.log(err));
});

router.post('/edit/', (req, res) => {
    let {id_funcionario ,nome, data_nascimento, email, telefone, endereco, cargo} = req.body;
    
    let dados = {nome, data_nascimento, email, telefone, endereco, cargo}; 

    Funcionario.update(dados, {where: {id_funcionario: id_funcionario}})
    .then(() =>{
        res.redirect('/funcionarios');
    })
    .catch(err => {console.log(err)});
});

router.get('/delete/:id', (req, res) =>{
    const id = req.params.id;
    Funcionario.destroy({where: {id_funcionario: id}})
    .then(() =>{
        res.redirect('/funcionarios');
    })
    .catch(err => {console.log(err)});;
});

module.exports = router;