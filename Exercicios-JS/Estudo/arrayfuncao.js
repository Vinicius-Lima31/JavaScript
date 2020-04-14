/*const array1 = []
const array2 = []

function Op(x) {
    x = x.map(function (n) {
        for (let i = 0; i < 20; i++)
            n.push(i)
        return n
    })
    return x
}

Op(array1)
console.log(array1)*/

let array = [1, 2, 3]
let array2 = [10, 20, 30]

function dobrar(arr) {
    arr = arr.map(num => {
        return num * 2
    })
    return arr
}

console.log(dobrar(array))
console.log(dobrar(array2))

console.log(array)
console.log(array2)

array2 = array.map(function (dx) {
    return dx * 2
})

console.log(array2)
module.exports = {ola:'ola'}

let array_ = []
 
function preencher(array, qtd) {
    for (let i = 0; i < qtd; i++) {
        array.push(i + 1)
    }
    return array
}
 
preencher(array_, 20)
 
console.log(array_)