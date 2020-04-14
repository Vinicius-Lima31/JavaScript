function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto // criei objeto a partir de uma função
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // prototipos desse objeto aponta para mesmo prototpo
console.log(MeuObjeto.prototype === obj1.__proto__) // o prototipo desse objeto, aponta para function.prototype
console.log(obj1.__proto__) // aponta para MeuObjeto { }
console.log()

// quando cria um objeto a partir de uma função, o seu __proto__ aponta para function.prototype
MeuObjeto.prototype.nome = 'Anônimo' // igual eu atribui 0 no Object.protoype parecido
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar() // pegou nome do prototipo
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // saindo de object.prototype para function.prototype
obj3.nome = 'obj3'
obj3.falar()
console.log()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) // por padrao aponta
console.log(Function.prototype.__proto__ === Object.prototype) // o prototipo de uma função é Object.prototype
console.log(Object.prototype.__proto__ === null)
