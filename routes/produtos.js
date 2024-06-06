const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos');


//buscando todos os alunos
router.get("/produtos", (req, res)=>{

    Produto.findAll({order:[
        ['nome', 'ASC']
    ]})
    .then(produtos =>{
        res.render('produtos', {
            produtos
        });
    }); 
});

router.get('/addproduto', (req, res) => {
    res.render('addproduto');
});

router.post('/addproduto', (req, res) => {
    let {nome, descricao,preco,imgsource} = req.body;

    Produto.create({
        nome,
        descricao,
        preco,
        imgsource,
    })
    .then(() => res.redirect('/verproduto'))
    .catch(err => console.log(err));
});


module.exports = router;