const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // a partir disso eu consigo achar o prototipo desse objeto, achar o objeto Pai
// o Prototipo de ferrari é um objeto vazio, mais existe e ele está presente
console.log(ferrari.__proto__ === Object.prototype) // Prototype de mais alto nivel, nao tem outro após ele
console.log(volvo.__proto__ === Object.prototype) // mesma coisa do de cima, apontam pro mesmo object prototype

console.log(Object.prototype.__proto__) // Sera que Object.prototype tem um prototipo depois dele?
// Não tem, retorna null, ele é o ultimo
console.log(Object.prototype.__proto__ === null) // por padrão aponta para Object.prototype

function MeuObjeto() { }
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
/* 
 *  Que um objeto em JS, ele tem uma referencia para seu prototipo 
 * __proto__ para acessar seu prototipo
 * Objeto não tem atributo prototype, apenas __proto__
 */