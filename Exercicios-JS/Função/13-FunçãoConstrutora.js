function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo Privado
    let velocidadeAtual = 0 // é um atributo que só pertence apenas função Carro

    //de preferencia ao let, em vez do var

    // Metodo Público
    this.acelerar = function () { // Sera responsavel para acrescentar velocidade atual
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }
    }
 //usa this e torna algo publico
    // Metodo Público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar() //Como velocidade Atual era igual a 0, e eu chamei o acelerar uma vez, ele passou pra 5
console.log(`Uno = ${uno.getVelocidadeAtual()}`)

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(`Ferrari = ${ferrari.getVelocidadeAtual()}`)

const siena = new Carro(160, 10)
siena.acelerar()
siena.acelerar()
siena.acelerar()
console.log(`Siena = ${siena.getVelocidadeAtual()}`)

console.log(uno) // Carro { acelerar: [Function], getVelocidadeAtual: [Function] }

console.log(typeof Carro) //Uma função
console.log(typeof ferrari) // Foi instanciado a um objeto