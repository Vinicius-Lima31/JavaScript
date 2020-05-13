// Sempre que eu terminar um arquivo com nome "Cliente" significa que ele vai ser importado e tals

// "require" = requirer.  "./" <--- Para acessar, estou na mesma pasta
// Estou acessando através da exportação, ex: a const "ModuloA" está recebendo os dados do Arquivo "ModuloA.js"
const moduloA = require("./ModuloA.js") // estou acessando outra pasta, o "ModuloA.js"
const moduloB = require("./ModuloB") //// estou acessando outra pasta, o "ModuloB.js"
// posso usar o ".js" ou não, não faz diferença

// ModuloA.js foi Passado para a constante "modulaA" e estou usando ela aqui
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

// ModuloB.js foi Passado para a constante "modulaB" e estou usando ela aqui
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)