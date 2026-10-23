const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send(`
    <h1>Bem vindo à Loja do Pedro!</h1>
    <p>Versão 1.</p>
    <p>
      <a href="/sobre">Sobre</a> |
      <a href="/produtos">Produtos</a> |
      <a href="/hora">Hora</a>
    </p>
  `);
});

app.get("/sobre", function(req, res) {
    res.send("<h1>Sobre</h1><p>Projeto 2 - Software em Nuvem. Equipe: Pedro e NOME2.</p>");
});

app.get("/produtos", function(req, res) {
    res.send("<h1>Lista de Produtos</h1><ul><li>Notebook</li><li>Mouse</li><li>Teclado</li></ul>");
});

app.get("/hora", function(req, res) {
    res.send("<h1>Hora do servidor</h1><p>" + new Date().toLocaleString("pt-BR") + "</p>");
});

app.get("/consulta/:parametro", function(req, res) {
    res.send("<h1>Retorno da consulta</h1><p>Você consultou: " + req.params.parametro + "</p>");
});

app.get("/cadastro", function(req, res) {
    res.send("<h1>Produto criado!</h1>");
});

app.get("/cadastro/:nome", function(req, res) {
    const nome = req.params.nome;
    res.send("<h1>Produto " + nome + " criado!</h1>");
});

app.use(function(req, res) {
    res.status(404).send("<h1>404 - Página não encontrada</h1>");
});

app.listen(process.env.PORT || 3000, function(erro) {
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
});