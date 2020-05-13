const porta = 3003

const express = require("express")
const app = express()

// vou Precisar importar o "BancoDeDados.js"
const BancoDeDados = require("./BancoDeDados.js")

app.get("/produtos", (req, res, next) => // Usando get encima do produtos, eu quero obter a lista de "produtos"
{
    res.send(BancoDeDados.getProdutos()) // Que é exatamente o que estou retornando aqui!
})

// Vou criar ou metodo, também da função "get"
app.get("/produtos/:id", (req, res, next) => // Não significa que eu vou digitar na URL "produto/:id"
{ // Esse "id" é como se fosse um parametro, na verdade ele é

    // o Parametro esta na "requisição"
    res.send(BancoDeDados.getProduto(req.params.id)) // req.params é o local onde eu tenho os parametros
}) // "parans" é o parametro da URL

app.post("/produtos", (req, res, next) => // Finalmente vou criar um "post" e submeter os dados e salvar um novo produto
{ // A diferença que quando a requisição for "post" ele vem pra ca
    // Nosso Objetivo é salvar um produto nesse Banco de Dados

    const produto = BancoDeDados.salvarProduto({
        nome: req.body.nome, // A forma de pegar os dados vem da "Requisição" "body" e cada um dos atributos que vieram
        preco: req.body.preco
    })
    
    // Quando eu fizer o "post" e tals, eu querer receber uma resposta
    res.send(produto) // vai gerar um JSON
}) 


app.listen(porta, () =>
{
    console.log(`Servidor Executando na Porta ${porta}`)
})

/*
    req.body é o corpo da requisição, ou seja, um atributo que dentro dele tem
    as informações relevantes que são enviadas na requisição. O que são essas informações 
    irá depender da natureza da requisição, ou seja, quem envia a requisição que decide 
    o que irá no seu corpo.
*/