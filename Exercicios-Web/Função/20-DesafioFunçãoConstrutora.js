function Pessoa(nome = '', idade = 0, cpf = 00) {
    this.p1 = function () {
        console.log(`Nome: ${nome}`)
        console.log(`Idade= ${idade}`)
        console.log(`CPF= ${cpf}`)
    }
}

const p = new Pessoa('Vinícius Lima', 19, 175)
p.p1()

console.log()

function Pessoa(nome = '', idade = 0, cpf = 00) {
    this.nome = nome    //Essa é a diferença de eu usar this.nome aqui, porque
    this.p1 = function () { //Eu poderia acessar ela mais a frente
        console.log(`Nome: ${nome}`)
        console.log(`Idade= ${idade}`)
        console.log(`CPF= ${cpf}`)
    }
}

const pc = new Pessoa('Vinícius Lima', 19, 175)
pc.p1()
console.log(pc.nome) //Acessando o this