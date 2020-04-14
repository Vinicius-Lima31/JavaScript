console.log(typeof console) //Console é um Object

console.log(Math.ceil(6.1))// Arredonda para Cima

const obj1 = {}
obj1.nome = 'Bola'
// Outra forma obj1['nome'] = 'Bola2'
console.log(obj1.nome) //Notação Ponto para acessar

function Obj(nome) {
    this.nome = nome /* Signifca nome associado ao objeto, this esta recebendo atributo nome por parametro
    pela função, e esse nome ficara visivel pra quem criar estanciar um objeto
    em outras palavras vai ficar publico */
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()