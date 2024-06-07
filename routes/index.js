const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos');


//buscando todos os alunos
router.get("/", (req, res)=>{
    Produto.findAll({
        where: {
            nome: 'Liz',
        },
    })
    .then(produtosLiz =>{
        res.render('index', {
            produtosLiz
        });
    }); 
});

router.get('/edit/', (req, res) => {
    let {nome, descricao,preco,imgsource} = req.body;
    
    let dados = {nome, descricao, preco, imgsource}; 

    Aluno.update(dados, {where: {id: id}})
    .then(() =>{
        res.redirect('/produtos');
    })
    .catch(err => {console.log(err)});
});

module.exports = router;