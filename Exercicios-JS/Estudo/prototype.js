Array.prototype.dobro = function () {
    for (let i = 0; i < this.length; i++)
        this[i] = this[i] * 2
    return this
}

let vetor = [1, 2, 3, 4, 5, 6]
console.log(vetor.dobro())
console.log(vetor.map(x => x * 2))

const obj = { num1: 52, num2: 95 }
const obj2 = Object.create(obj, {
    num5:{value: 99, enumerable: true, writable: true}
})

console.log(obj2.num1)
Object.defineProperty(obj2, 'num3', {
    value: 459, writable: false, enumerable: true
})

console.log(obj2)