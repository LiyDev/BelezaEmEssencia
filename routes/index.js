const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos');


//buscando todos os alunos
router.get("/", (req, res)=>{
    let produtosLiz = '';
    let produtosLily = '';

    Produto.findAll({
        where: {
            nome: 'Liz',
        },
    })
    .then(Liz => {
        produtosLiz = Liz
    })
    Produto.findAll({
        where: {
            nome: 'Lilly',
        },
    })
    .then(Lily => {
            produtosLily = Lily
    });
    Produto.findAll({
        where: {
            nome: 'Coffee',
        },
    })
    .then(produtosCoffee => {
        res.render('index', {
            produtosLily,
            produtosCoffee,
            produtosLiz
        });
    });

    
});

// router.get("/", (req, res)=>{
//     Produto.findAll({
//         where: {
//             nome: 'Coffee',
//         },
//     })
//     .then(produtosCoffee =>{
//         res.render('index', {
//             produtosCoffee
//         });
//     }); 
// });

// router.get("/", (req, res)=>{
//     Produto.findAll({
//         where: {
//             nome: 'Lilly',
//         },
//     })
//     .then(produtosLilly =>{
//         res.render('index', {
//             produtosLilly
//         });
//     }); 
// });

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