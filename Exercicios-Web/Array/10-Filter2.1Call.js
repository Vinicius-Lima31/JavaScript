Array.prototype.filter2 = function (cb) {
    const newArr = []
    for (let i = 0; i < this.length; i++) {
        if (cb.call(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Carro', preco: 3499, fragil: false },
    { nome: 'PC', preco: 1000, fragil: true },
    { nome: 'Celular', preco: 1300, fragil: true }
]

const isFragil = function () {
    return this.fragil === true
}

const frageis = produtos.filter2(isFragil)

console.log(frageis);