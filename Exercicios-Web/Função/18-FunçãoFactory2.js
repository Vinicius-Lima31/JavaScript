function pessoa(nome = '', idade = 0) {
    return {
        nome: nome,
        idade: idade
    }
}
console.log(pessoa('Vinícius', 19))
console.log(pessoa('Paula', 40))
console.log(pessoa('Maria'))

const p1 = new pessoa('Marcelo', 43)
const p2 = new pessoa('Marcella', 5)

console.log(p1)                 //Porém se eu usasse assim =   console.log(p1()) ou console.log(p2())
console.log(p2)                 // Da um erro dizendo que não foi definida, é isso que não compreendi, quando eu instancio um New eu não preciso mais usar () parenteses ?

console.log()

function criarProduto (nome,preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
