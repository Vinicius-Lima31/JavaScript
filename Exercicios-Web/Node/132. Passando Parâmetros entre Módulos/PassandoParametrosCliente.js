// Importei de "PassandoParametros.js"
const saudacoes = require("./PassandoParametros")("Ana", "Jõao", "Lucas") //<-- Como é uma função, agora eu posso passar os parametros que eu quero

console.log(saudacoes)
// Ira imprimir o Array, exemplo de um: "Boa Semana Ana"

console.log(saudacoes[1]) // é um Array, ira imprimir o indice [1]