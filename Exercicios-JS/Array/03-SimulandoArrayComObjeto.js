const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0]) // eu posso acessar assim um objeto
// console.log(quaseArray.0) Não funcionaria, pq não tem como acessar um numero

const MeuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), MeuArray)