// Aqui eu vou querer acessar uma pasta da Aula "123. Sistema de Módulos/ModuloA.js"
// Vou querer acessar esse arquivo, porem percebemos:
// Estou dentro de uma "pastaB" que esta dentro de uma "pastaA" que esta dentro... por diante

// usando o " ../ " eu saiu de uma pasta
const moduloA = require("../../../123. Sistema de Módulos/ModuloA") 
// Traduzinho isso tudo aqui em cima, eu sai de 3 pastas (../), entrei na pasta da aula 123. e entrei no ModuloA.js

console.log(moduloA.ola)

// Eu também poderia apertar com botão direito no arquivo que eu quero
// e clicar em "Copy Path" e copiar o local dela, e depois colar
/// no require --> require("Colar aqui dentro")

// const moduloA = require("C:\Users\FalaZezeBomDiaCara\Documents\Exercicios-JS\Node\123. Sistema de Módulos\ModuloA.js")


/*
    Após eu criar uma pasta chamada "saudacao" dentro do "node_modules", dentro de "saudacao" eu crio um arquivo
    chamado "index.js", dentro dele eu fiz o seguinte:

        module.exports.ola = "Olá, Bom dia!"
    
    Vamos importar ela agora e usar:
*/

const saudacao = require("saudacao") // <-- "Importei saudacao"
console.log(saudacao.ola) // Irá imprimir "Olá, Bom dia!"

/*  
    Uma Observação, o nome do arquivo tem que ser sempre index.js, ele é o arquivo
    que "saudacao" ira acessar, se eu colocar outro nome ao inves de "index.js"
    ele ocorrera um erro.
 */

// Exitem as bibliotecas que ja importamos e que ja vem
// vamos usar uma que ja vem

const http = require('http') // <-- Importei http
http.createServer((req, res) =>
{
    res.write("Bom dia, Usando http")
    res.end()
}).listen(8080) // <-- fazendo isso na Porta 8080
// Entrando em "localhost:8080" , veremos isso sendo usado

/*
    Vamos lembrar algo immportante
    .
    Para importar uma biblioteca, bastamos apenas importar o nome
    por exemplo: require("http")

    Agora importar um arquivo, temos que especificar o local
    por exemplo: require("../teste1/teste2")
*/
