const express = require('express');
const router = express.Router();
const Venda = require('../models/venda');
const Funcionario = require('../models/funcionario');
const Cliente = require('../models/cliente');
const Produto = require('../models/produtos');
const VendaProduto = require('../models/venda_has_produtos');




router.get("/", (req, res)=>{
    let produtos = '';
    Produto.findAll({order:[
        ['nome', 'ASC']
    ]})
    .then(produto =>{
        produtos = produto
    });
    Venda.findAll({order:[
        ['id_venda', 'ASC']
    ]})
    .then(vendas =>{
        res.render('vendas', {
            vendas,
            produtos
        });
    });
    
});

router.get("/produto/:id", (req, res) => {
    let produtos = '';
    Produto.findAll({order:[
        ['nome', 'ASC']
    ]})
    .then(produto =>{
        produtos = produto
    });
    Venda.findOne({
        where: {id_venda: req.params.id}
        })
        .then(vendas =>{
        res.render('addprodutovenda', {
            vendas,
            produtos
        });
        }).catch(err => console.log(err));
});

router.post('/produto/add', (req, res) => {
    let {id_venda, id_produto} = req.body;

    VendaProduto.create({
        id_cliente,
        id_produto,
    })
    .then(() => res.redirect('/vendas'))
    .catch(err => console.log(err));
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
    let funcionarios = '';
    Funcionario.findAll({order:[
        ['id_funcionario', 'ASC']
    ]})
    .then(funcionario => {
        funcionarios = funcionario;
    })
    Cliente.findAll({order:[
        ['id_cliente', 'ASC']
    ]})
    .then(clientes => {
        res.render('addvenda', {
            clientes,
            funcionarios
        })
    }).catch(err => console.log(err)); 
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
