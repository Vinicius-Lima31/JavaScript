// Apenas relembrando as formas de Exportar
console.log(module.exports === this)        // true
console.log(module.exports === exports)     // true

this.a = 1              // As 3
exports.b = 2           // formas de
module.exports.c = 3    // exportar

// Observação
exports = null
console.log(module.exports) // <-- ira imprimir o Objeto completo = { a: 1, b: 2, c: 3 }

console.log(this)
console.log(exports) // Apontei pra null

// Vou apontar o "module.exports" para um Objeto
module.exports = { publico : true }