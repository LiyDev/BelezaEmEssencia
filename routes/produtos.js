const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos');


//buscando todos os alunos
router.get("/", (req, res)=>{
    Produto.findAll({order:[
        ['nome', 'ASC']
    ]})
    .then(produtos =>{
        res.render('produtos', {
            produtos
        });
    }); 
});

router.get("/editar/:id", (req, res) => Produto.findOne({
    where: {id: req.params.id}
}).then(produto =>{
    res.render('editarProduto', {
        produto
    });
}).catch(err => console.log(err)));

router.get('/add', (req, res) => {
    res.render('addproduto');
});

router.post('/add', (req, res) => {
    let {nome, descricao,preco,imgsource} = req.body;

    Produto.create({
        nome,
        descricao,
        preco,
        imgsource,
    })
    .then(() => res.redirect('/produtos'))
    .catch(err => console.log(err));
});

router.post('/edit/', (req, res) => {
    let {nome, descricao,preco,imgsource} = req.body;
    
    let dados = {nome, descricao, preco, imgsource}; 

    Aluno.update(dados, {where: {id: id}})
    .then(() =>{
        res.redirect('/produtos');
    })
    .catch(err => {console.log(err)});
});

module.exports = router;