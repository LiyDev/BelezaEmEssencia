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

router.get("/editar/:id", (req, res) => 
    Venda.findOne({
    where: {id_venda: req.params.id}
    }).then(vendas =>{
    res.render('editarvendas', {
        vendas
    });
    }).catch(err => console.log(err)));

router.get("/add", (req, res)=>{
    res.render('addvenda');
});

router.post('/add', (req, res) => {
    let {id_cliente, id_funcionario, data_da_venda} = req.body;

    Venda.create({
        id_cliente,
        id_funcionario,
        data_da_venda
    })
    .then(() => res.redirect('/vendas'))
    .catch(err => console.log(err));
    let id_venda = Venda.findOne({
        order:[
            ['id_venda', 'DESC']
        ]
    })
    console.log(id_venda);
});

router.post('/edit/', (req, res) => {
    let {id_cliente, id_funcionario, data_da_venda} = req.body;
    
    let dados = {id_cliente, id_funcionario, data_da_venda}; 

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
