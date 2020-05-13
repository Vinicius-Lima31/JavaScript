// Tudo isso será mais abordado melhor para frente.
// Preciso saber a porta para atenteder a "Requisição"
const porta = 3003 // Vou usar a aplicação nessa Porta!

// Ja que instalamos o "Express" vamos importar ele agora.

const express = require("express") // Importado, ele obviamente está dentro de "node_modules"

const app = express() // Eu instanciei o "express" em cima do "app"
// E irei trabalhar em cima dessa variavel "app", será nela que iremos colocar nossos serviços

// "get" é uma forma de "requisição"

app.get("/produtos", (req, res, next) => // Usando Middleware
{
    console.log("Middleware, usando --> Next <--")
    next()
})

app.get("/produtos", (req, res, next) =>             // "produto" é o que vem depois do localhost
{                                                   // req = Requisição
    res.send({nome: "Notebook", preco: 123.45})     // res = Resposta
})  // "send" envia uma resposta                    // next = Próximo
// Esse Objeto é um "JSON, ele é convertido para JSON Automaticamente

app.listen(porta, () => // Chamo uma "Callback" para ver se de fato foi começado minha aplicação
{
    console.log(`Servidor está Executando na Porta ${porta}`)
})

// Se eu for no "Terminal" e colocar: "node Servidor.js" ele não vai executar, isso porque só e possivel rodar uma única aplicação em uma porta
// Pode rodar mais de uma, mas com outras ferramentas.
// Só é possivel rodar uma única aplicação em uma Porta