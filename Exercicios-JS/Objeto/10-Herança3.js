const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // criei um objeto novo, com "pai" como prototipo
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // com função create ja declarei sem prototipo

const filha2 = Object.create(pai, { // atribuindo direto
    nome: { value: 'Bia', writable: false, enumerable: true }, 
    corOlhos: { value: 'Castanho', writalbe: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem Cabelos ${filha2.corCabelo} e Olhos ${filha2.corOlhos}`)

console.log(Object.keys(filha1)) //Caso eu não desse nome, ele não ia declarar, não fica de herança
console.log(Object.keys(filha2))

for (let key in filha2) {
    console.log(key) // Mostra o que tem dentro,  herança e tudo
}
console.log()
for (var key in filha2) { // retorna true, significa que pertence ao objeto
    if (filha2.hasOwnProperty(key))      // Uma forma de saber se é de herança ou de proprio
        console.log(key)
    else
        console.log(`Por Herança: ${key}`)
}
console.log()
console.log(key)