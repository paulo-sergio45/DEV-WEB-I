/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//instaciando o expres e bibiotecas
var express = require('express');
var createError = require('http-errors');
var rotas = require("./rotas/rotas")
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require("ejs");



var server = express();

// dificudade com a engine pug deu ruim
// view engine setup
// server.set('views', path.join(__dirname, './visao'));
// server.set('view engine', 'pug');
// server.use(express.static('visao'));

server.use(express.static(path.join(__dirname, './visao')));
server.set('views', path.join(__dirname, './visao'));
server.engine('html', ejs.renderFile);
server.set('view engine', 'html');

server.use(logger('tiny'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());


//passando as rotas para classe responsavel
server.use("/", rotas);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
    next(createError(404));
});


// error handler
server.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = server;
//modulo server vai para bin/wwww XD