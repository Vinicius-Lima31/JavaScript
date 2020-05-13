// Object.preventExtensions
// ele vai previnir que não seja aumentado numero de atributos, não pode extender

const produto = Object.preventExtensions({
    // um produto que não pode ser aumentado
    nome: 'Qualquer', preco: 1.99, tag: 'promoção' 
})
console.log('Extensível:', Object.isExtensible(produto)) // tou conferindo se é realmente não extensivel

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar Branca' // Não vai ser adcionado! 
delete produto.tag // adcionar não pode, mais excluir não tem problema
console.log(produto) 
console.log()

// Object.seal ... selar
const pessoa = {nome:'Juliana', idade:35} // não consigo adcionar nem excluir, apenas modificar valores
Object.seal(pessoa) // selado, só posso alterar valores dos atributos
console.log('Selado:', Object.isSealed(pessoa)) // Conferindo se realmente está selado

pessoa.sobrenome = 'Silva' // tentando adcionar "sobrenome" porém não vai funcionar
delete pessoa.nome
pessoa.idade = 29 // consigo alterar sem problemas
console.log(pessoa)

// Object.freeze = selado + valores constantes.. ja foi mostrado