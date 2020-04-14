Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { // se for true adiciona
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil //  se for true não precisa botar == true

console.log()
console.log(produtos.filter2(caro).filter2(fragil))

Array.prototype.filter3 = function(cb) {
    const newArr = []
    for (let i = 0; i < this.length; i++) {
        if(cb.call(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr
}
/* 
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Carro', preco: 3499, fragil: false },
    { nome: 'PC', preco: 1000, fragil: true },
    { nome: 'Celular', preco: 1300, fragil: true }
]
 
const isFragil = function() {
    
    return this.fragil == true
}
 
const frageis = produtos.filter3(isFragil)
 
console.log(frageis);
*/