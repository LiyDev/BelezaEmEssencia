const express = require('express');
const router = express.Router();

//buscando todos os alunos
router.get("/", (req, res)=>{

    res.render('teste');
     
});

module.exports = router;