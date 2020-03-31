var arqui = require('../controle/manuarquivo');
var express = require('express');

var rotas = express.Router();

//depois botar um icone aki para nao dar o error
rotas.get('/favicon.ico', (req, res) => res.status(204));

rotas.get("/", function(req, res, next) {
    res.render("./index.ejs");
});


module.exports = rotas;