const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
// Foi dito que um objeto é um par de chaves e valores
console.log(Object.keys(pessoa)) // a função keys é para apenas chaves
console.log(Object.values(pessoa))// a função values é para apenas os valores
console.log(Object.entries(pessoa)) // a função entries é para ler em forma de array

console.log()
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`) // Que seria chave/valor, por isso 2 indices 0 e 1
})

console.log()
Object.entries(pessoa).forEach(([chave, valor]) => { // destruct, estou destruturando elementos de um array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'DataNascimento', { // atribuindo propriedade para objeto de outra forma
    enumerable: true, // Propriedade deseja ser listada? true sim
    writable: false, // Propriedade deseja ser mudada? false não
    value: '01/01/2019' // atribuindo valor a chave DataNascimento
})

pessoa.DataNascimento = '01/01/2017' // Não consigo alterar, porque eu congelei ela
console.log(pessoa.DataNascimento)
console.log(Object.keys(pessoa)) // Ira mostrar, pq eu deixei ativado
console.log()

// Object.assign (ECMAscript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } // a ja foi escrito sera sobrescrito
const obj = Object.assign(dest, o1, o2) // todos objetos que eu passar, ira passar para para o primeiro, no caso obj dest
//assign e uma forma de concatenar todos objetos em 1 só
Object.freeze(obj)
obj.c = 1234 // congelei
console.log(obj) // não sera alterada nada

// EU ----------_________________________---------------------_______________________------------------------------____________

console.log()
const teste = {
    n1: 50,
    n2: 25
}
console.log(Object.values(teste))
console.log(Object.keys(teste))
Object.defineProperty(teste, 'n3', {
    enumerable: true,
    writable: false,
    value: 100
})
console.log(teste)
const teste2 = { n4: 500 }
const teste3 = { n5: 0 }
Object.assign(teste, teste2, teste3)
teste.n3 = 10
teste.n2 = teste.n2 + 50
console.log(teste)

Object.entries(teste).forEach(([chave, valor]) => {
    console.log(`${chave} = ${valor}`)
})