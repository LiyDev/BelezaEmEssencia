const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos');


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
    where: {id_produto: req.params.id}
}).then(produtos =>{
    res.render('editarproduto', {
        produtos
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
    let {id, nome, descricao,preco,imgsource} = req.body;
    
    let dados = {nome, descricao, preco, imgsource}; 

    Produto.update(dados, {where: {id_produto: id}})
    .then(() =>{
        res.redirect('/produtos');
    })
    .catch(err => {console.log(err)});
});

router.get('/delete/:id', (req, res) =>{
    const id = req.params.id;
    Produto.destroy({where: {id_produto: id}})
    .then(() =>{
        res.redirect('/produtos');
    })
    .catch(err => {console.log(err)});;
});


module.exports = router;