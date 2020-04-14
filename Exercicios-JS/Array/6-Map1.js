const nums = [1, 2, 3, 4, 5]

// For com propósito, ele modifica
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

// Eu tenho um Array, chamo o map, ele gera um novo Array transformado
// ele não transforma o array atual, ele gera um novo modificado

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
// parseFloat convertendo numero para real

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)