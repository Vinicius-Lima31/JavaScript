const fs = require("fs") // Importei o File System

const produto = // Vou criar um Objeto chamado "produto"
{
    nome: "Celular",
    preco: 1249.99,
    desconto: 0.15
}// Eu quero pegar esse Objeto e salvar ele no Disco, salvarei em um json
// Quero transformar esse Objeto em um texto, ou seja, JSON


fs.writeFile(__dirname + "/ArquivoGerado.js", JSON.stringify(produto), err =>
{   // Passo o Nome do Arquivo que eu quero gerar, passo um json do Objeto produto, e também faço uma Callback

    console.log(err || "Arquivo Criado") // Ira imprimir o Erro ou imprimir "Arquivo Criado"

})

// Pronto, o "ArquivoGerado.json" foi criado, e com Objeto produto dentro dele, em formato JSON

const local = __dirname + "/ArquivoGerado.json"

fs.readFile(local, "utf-8", (err, conteudo) =>
{
    console.log(JSON.parse(conteudo)) // Aqui eu transformei em Objeto!
})
