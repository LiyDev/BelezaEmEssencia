const express = require('express');
const router = express.Router();
const Venda = require('../models/venda');

router.get("/", (req, res)=>{
    Venda.findAll({order:[
        ['id_venda', 'ASC']
    ]})
    .then(vendas =>{
        res.render('vendas', {
            vendas
        });
    }); 
});

router.get("/editar/:id", (req, res) => Venda.findOne({
    where: {id_venda: req.params.id}
}).then(vendas =>{
    res.render('editarvendas', {
        vendas
    });
}).catch(err => console.log(err)));

router.get("/add", (req, res)=>{
    res.render('addvendas');
});

router.post('/add', (req, res) => {
    let {nome, data_nascimento, email, telefone, endereco} = req.body;

    Venda.create({
        nome,
        data_nascimento,
        email,
        telefone,
        endereco
    })
    .then(() => res.redirect('/vendas'))
    .catch(err => console.log(err));
});

router.post('/edit/', (req, res) => {
    let {nome, data_nascimento, email, telefone, endereco} = req.body;
    
    let dados = {nome, data_nascimento, email, telefone, endereco}; 

    Venda.update(dados, {where: {id_venda: id}})
    .then(() =>{
        res.redirect('/vendas');
    })
    .catch(err => {console.log(err)});
});

router.get('/delete/:id', (req, res) =>{
    const id = req.params.id;
    Venda.destroy({where: {id_venda: id}})
    .then(() =>{
        res.redirect('/vendas');
    })
    .catch(err => {console.log(err)});;
});

module.exports = router;

module.exports = router;