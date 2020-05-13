const contadorA = require("./InstanciaUnica") // Requerimos o Objeto de "InstanciaUnica.js"
const contadorB = require("./InstanciaUnica") // Requerimos o Objeto de "InstanciaUnica.js"

const contadorC = require("./InstanciaNova")() // <-- TENHO QUE COLOCAR () PARA INSTANCIAR UM NOVO OBJETO Requerimos o Objeto de "InstanciaNova.js"
const contadorD = require("./InstanciaNova")() // <-- TENHO QUE COLOCAR () PARA INSTANCIAR UM NOVO OBJETO Requerimos o Objeto de "InstanciaNova.js"

// É uma mesma instancia
// "contadorA" e "contadorB" compartilham de um mesmo Objeto
contadorA.inc() // Incrementa +1 no valor: 1 + 1 = 2
contadorA.inc() // Incrementa +1 no valor: 2 + 1 = 3

// Percebe que eu incrementei apenas na constante "contadorA", porem o "contadorB" também foi afetado
// Isso porque eles compartilham o mesmo Objeto
console.log(contadorA.valor, contadorB.valor) // <-- 3  3

// Não são uma mesma Instancia
// "contadorA" e "contadorB" não compartilham um mesmo Objeto
contadorC.inc() // Incrementa +1 no valor: 1 + 1 = 2
contadorC.inc() // Incrementa +1 no valor: 2 + 1 = 3
console.log(contadorC.valor, contadorD.valor) // <-- 3  1

