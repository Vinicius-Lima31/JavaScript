//bind objeto
const pessoa = {
    saudacao: 'Bom dia !',
    falar() { // voce tem tambem esse recurso de criar uma função dessa forma, no ES2015
        console.log(this.saudacao) //estou acessando this, do objeto dessa função, no caso objeto "pessoa"

    }
}
pessoa.falar() // se eu tirar o this da linha 4, vai da erro, vai dizer que não conhece a variavel 'saudacao'
const falar = pessoa.falar // armazenar função em uma constante
falar() /*gerou problema .. undefined
conflito entre paradigmas: funcional e Orientada a objetos */

const falarDePessoa = pessoa.falar.bind(pessoa) // bind se passa um objeto, no qual quer se seja resolvido o this
//Significa sempre que o this sera resolvido para pessoa, por isso usar o bind
falarDePessoa()
//Bind é responsavel por amarrar um objeto, sempre que for chamado, sempre que referenciar um this

// ------------------------ 
console.log('\n')
const x = {
    conta: 1 + 1,
    nome: 'Vinícius quer seu Ryzen 5 3600',
    res() {
        console.log(this.conta) //faz com que 'conta' fique visivel
        console.log(this.nome) // x.nome por exemplo
    },
   op: this.conta = 'oi'
}
x.res()
const y = x.res
console.log(`sera undefined = ${y()}`) // sera undefined, pq ele não sabe para onde está indo
const z = x.res.bind(x) //Bind apontara para objeto 'x'
z()
console.log(x.op)

console.log('\n')
function i() {
    var oi = 52 
    this.oi = 56 //botei para ficar visivel com valor 56
    console.log(oi) // 52
}

i()
console.log(oi) // imprimir 56