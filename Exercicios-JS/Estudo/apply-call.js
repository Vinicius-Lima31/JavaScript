function error(e) {
    throw `ERROR NOT FOUND 404`
}

function get(moeda = 'R$') {
    return `Produto: ${this.nome}\nPreço Orignal: ${moeda} ${this.preco}\nPreço com Desconto: ${moeda} ${this.preco - (this.preco * this.desc)}\n`
}

const prod = {
    nome: 'Celular', preco: 919.99, desc: 0.2, get
}

console.log(get())
global.preco = 50
global.desc = 0.09
global.nome = 'Pendrive'

console.log(get())
console.log(prod.get())

const prod1 = {
    nome: 'PC Gamer', preco: 3500, desc: 0.13
}

console.log(get.call(prod1))
console.log(get.apply(prod1, ['$']))

const obj1 = {
    _number: 5,
    get number() {
        return this._number--
    },
    set number(n) {
        if (n >= 9)
            this._number = n

    }
}

console.log(obj1.number)
console.log(obj1.number)
console.log(obj1.number)
console.log(obj1.number)
console.log(obj1.number)
const ar = [599, 6, 7]
const [n1, n2, n3] = ar
console.log(n1)

try {
    dasdc
} catch (e) {
    error()
}

