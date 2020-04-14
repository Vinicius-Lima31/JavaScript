(function () {
    console.log('...');
    console.log('....');
})()

console.log([].concat([1, 2, 3], [4, 5, 6]))
console.log()

function pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade

}

pessoa.prototype.nascimento = function () {
    let data = new Date()
    let hoje = data.getFullYear()
    return hoje - this.idade
}

const p1 = new pessoa('Heleno', 42)
p1.cabelo = 'Pretos'

const p2 = new pessoa('André', 15)
console.log(p2)

Object.setPrototypeOf(p2, p1)

console.log(p2.cabelo)

Object.defineProperty(p1, 'Nascimento', {
    enumerable: true,
    writable: false,
    value: p1.nascimento()
})

Object.defineProperty(p2, 'Nascimento', {
    enumerable: true,
    writable: false,
    value: p2.nascimento()
})

console.log(p1)
console.log(p2)

let a = [1, 2, 3, 4]
console.log(a.map(x => x * 2))

Object.defineProperty(p1, 'fc', {
    enumerable: false,
    writable: false,
    value: 'Paizão'

})

console.log(p1.fc)

const avo = {
    cabelo: 'Brancos',
    Altura: 'Alto'
}

Object.setPrototypeOf(p1, avo)

console.log(p1.Altura)
String.prototype.xxx = function(){
    return 'Andre'
}

console.log('pai'.xxx())

Object.prototype.teste = 'Oi Galerinha'

console.log(avo.teste)