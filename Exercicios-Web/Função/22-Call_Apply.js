//Duas formas de chamar função, Call e apply
// + 2  formas de chamar função, ja vimos a função bind, e agora vamos ver outras 2

// A diferença entre Call & Apply é exatamente a forma em que se passa os paramentros
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // R$ Nan porque o this no contexto global na esta definido
//Se eu tivesse assim
global.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco()) // que exatamente valor do Objeto produto, notebbok

// Usando Call e Apply

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))  //Apontando para carro
console.log(getPreco.apply(carro))  //Apontando e tals

//A diferença é apenas a passagem de parametros, entre call e apply

console.log(getPreco.call(carro, 0.17, '$')) // ele usou os paramentros
console.log(getPreco.apply(carro, [0.17, '$'])) // no apply usa os parametros dentro de um array

console.log(getPreco.apply(global, [0.01, '$'])) // alterei a global