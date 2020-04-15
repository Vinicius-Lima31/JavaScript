//Função Anonima é uma função sem nome, simples isso
const soma = function (x, y) { //Uma simples função que retorna soma de 2 numeros
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { //Passei como parametro a e b, e operacao, caso não seja passado nada em operacao, ele recebera ''soma'' por padrao
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) //recebeu 3 e 4 como parametros e "soma" por padrão = 7
imprimirResultado(3, 4, soma) //Mesma coisa que a linha de cima = 7
imprimirResultado(3, 4, function (a, b) {
    return a - b
})
imprimirResultado(3, 4, (x, y) => x * y) // teria que usar parenteses nos parametros porque são 2, se fosse 1, nao haveria necessidade

const pessoa = {
    bfr: 'BFR',

    falar: function () {             //Eu poderia usar assim, uma função dentro da propriedade
        console.log('Opa')          // .
    },                              // .
    // .
    falar2() {                       //Ou assim, novo recurso do ES2015

        console.log(this.bfr)
    }
}
pessoa.falar()
pessoa.falar2()

const a = pessoa.falar2.bind(pessoa)
a()

function funcao () {
    var nomeDaVar = 'alguma coisa' // será acessível só dentro da função
    this.outraVar = 'alo Brazél' // será disponível no objeto global
    console.log(nomeDaVar) // log 'alguma coisa'
    console.log(outraVar) // log 'alo Brazél'
  }
  
  funcao() // run it
  
  console.log(outraVar) // log 'alo Brazél'
 // console.log(nomeDaVar) // ReferenceError: nomeDaVar is not defined

 new funcao