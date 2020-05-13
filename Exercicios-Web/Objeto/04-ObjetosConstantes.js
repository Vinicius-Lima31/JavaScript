// pessoa -> 123 -> {...} a Constante pessoa aponta para um endereço 123, que tem o objeto
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro' //eu mudo o dado nao a referencia
console.log(pessoa)

// pessoa -> 456 -> {...} que a variavel pessoa aponte para outro endereço memoria
// pessoa = {} Não ira funcionar, ERROR
// Não posso atribuir para constante pessoa, outra coisa

Object.freeze(pessoa) // foi congelado, não deixe ninguem alterar nada

pessoa.nome = 'Maria'
pessoa.end = 'RUA ABC'
delete pessoa.nome
console.log(pessoa.nome) //objeto continua do jeito que tava, não é possivel mais mexer
console.log(pessoa)
// Não consigo alterar mais, objeto virou uma constante, Object.freeze(object)

const pessoaConstante = Object.freeze({ nome: 'João' }) // Objeto constante, nunca ser mudado
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
