// Importar dependencia / Dados da biblioteca
const express = require('express');
const path = require('path');
const pages = require('./pages');

// Iniciando o express
const server = express()
server
    // Utilizar body do req
    .use(express.urlencoded({ extended: true}))
    // Utilizando os arquivos estáticos
    .use(express.static('public'))

    // Configurar template engine (usar extensão hbs)
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // Criar uma rota => Nota: a barra '/' identifica o arquivo a ser roteado (ex:/index.html)
    // ROTAS DA APLICAÇÃO
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// Ligar o servidor
server.listen(5501)
