const express = require("express")
const app = express()

/*  O que o "body-parser" vai fazer é, uma vez que submeto meus dados eu um formulario
    ele vai fazer um parser no corpo da requisição, vai pegar esses dados e jogare dentro
    do request.body, ou seja, quando eu acessar request.body, eu vou ter acesso a todos os dados do formulario que submeti
*/

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))

// no "form.html" o método é post, então usaremos post, e o endereço é /usuario
app.post("/usuarios", (req, resp, next) => // Quero atender uma requisição do tipo "post"
{ // Passo uma Middleware
    console.log(req.body) // Para saber de fato oque chegou no body da requisição
    resp.send("<h1>Parabéns</h1>") // Quando o úsuario clicar no formulario para submeter.
}) 

app.listen(3003, ()=>
{
    console.log(`Executando na Porta ${3003}`)
})

// Se não tivesse o body-parser não iria funcionar, porque não teria como ele ir fazer um parser no corpo da requisição