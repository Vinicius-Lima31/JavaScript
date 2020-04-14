let a = 3

console.log(this.a) //undefined
console.log(global.b) // undefined 
//global é igual window no bowser

// A não ser que eu faça isso
global.b = 123
console.log(global.b) //123
console.log('\n')

this.c = 456
this.d = false
this.e = 'teste'

console.log(a) // 3
console.log(global.b) // 123
console.log(this.c) // 456
console.log(module.exports.c) // 456
console.log(module.exports === this) // true, sao iguais
console.log(module.exports) // { c: 456, d: false, e: 'teste'}

//criando uma variavel maluca: sem var e let
abc = 3 // nao façã isso em casa !!! variavel super global
console.log(global.abc) // 3
console.log(this)

this.op = 'BFR'
console.log(this)
console.log(module.exports.op)