const porta = 3003
const express = require("express")
const app = express()

const BancoDeDados = require("./BancoDeDados.js")

// O que eu tentei pegar da "Requisição" para isso terei que instalar o body-parser
const bodyParser = require("body-parser")

// "app" vai usar "bodyParser" utilizando "urlencoded", que é aquela função do PostMan -> x-www.form-urlencoded
// Dependendo do que eu for usar, eu tenho que colocar aqui, no caso eu vou usar urlencoded
// Mas se eu fosse usar o "none" eu teria que colocar BodyParser.none()
// "urlencoded" vai retornar uma função Middleware
app.use(bodyParser.urlencoded({ extended: true })) // Tenho que passar um Objeto, dizendo que ta extended !OBRIGATORIO!

// Presta atenção que tou usando exatamente o "urlencoded" no postman
// Essa linha 14 significa que qualquer requisição que eu for fazer, obrigatoriamente ele vai passar por esse Milledware

app.get("/produtos", (req, res, next) => 
{
    res.send(BancoDeDados.getProdutos())
})

app.get("/produtos/:id", (req, res, next) => 
{
    res.send(BancoDeDados.getProduto(req.params.id)) 
})

app.post("/produtos", (req, res, next) => 
{ 
    const produto = BancoDeDados.salvarProduto({
        nome: req.body.nome, 
        preco: req.body.preco
    })
    res.send(produto) 
})

// Irei criar um Método Para Alterar os Dados (Update)
// O "Alterar" eu poderia usar o "put" em vez do "get" ou "post"

app.put("/produtos/:id", (req, res, next) => // Eu passo um Parametro, porque esse parametro é o "id" que eu quero alterar!
{ 
    const produto = BancoDeDados.salvarProduto({
        id: req.params.id,      // Passando o id 
        nome: req.body.nome,    // Aqui eu estaria alterando
        preco: req.body.preco   // Aqui eu estaria alterando
    })
    res.send(produto) 
})

app.delete("/produtos/:id", (req, res, next) => 
{
    // Aqui vou simplesmente chamar a função excluir produto
    const produto = BancoDeDados.excluirProduto(req.params.id) // Passei o ID que desejo "deletar"
    res.send(produto) // JSON
})

app.listen(porta, () =>
{
    console.log(`Servidor Executando na Porta ${porta}`)
})