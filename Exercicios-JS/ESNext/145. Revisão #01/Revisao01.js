// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b) <-- Não funciona

// Template String
const produto = "iPad"
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...pra] = "Cod3r" // "pra" recebeu o resto, ou seja, "d3r"
console.log(l, e, pra)

const [x, , y] = [1, 2, 3] // Ignorou o "2"
console.log(x, y)

const {idade: i, nome} = {idade: 9, nome: "Ana"} // Renomiei "idade" para "i"
console.log(i, nome)
