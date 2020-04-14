Array.prototype.dobro = function () {
    for (let i = 0; i < this.length; i++)
        this[i] = this[i] * 2
    return this
}

let vetor = [1, 2, 3, 4]

console.log(vetor.dobro())
console.log(vetor.map(x => x * 2))