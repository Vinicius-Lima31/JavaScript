class Biza {
    constructor(sangue = 1) {
        this.sangue = sangue
    }
    funcao() {
        return ++this.sangue
    }
}

class Avo extends Biza {
    constructor(Sobrenome) {
        super()
        Sobrenome = 'Silva'
        this.Sobrenome = Sobrenome
    }
}

class Pai extends Avo {
    constructor(olhos = 'Pretos') {
        super()
        this.olhos = olhos
    }
}

class Filho extends Pai {
    constructor(cabelo = 'Pretos', olhos) {
        super('Verde') // So usar Super assim padrão que funcionara 
        this.cabelo = cabelo
    }
}

const Pai_ = new Pai('Azul')
const Filho_ = new Filho('Loiros')
const Filho2_ = new Filho()
const Avo_ = new Avo()
const Biza_ = new Biza()

console.log(Biza_)
console.log(Avo_)
console.log(Pai_)
console.log(Filho_)
console.log(Filho2_)
Biza_.funcao()
Biza_.funcao()
console.log(Biza_)
Avo_.funcao()
Avo_.funcao()
Avo_.funcao()
console.log(Avo_)

function infinito(...teste) {
    console.log(teste)
    teste.forEach(function (x) {
        console.log(x * 10 / 2)
    })

}

infinito(5, 6, 8, 7)

Object.prototype.x = 'XYZ'
const _pai = {
    nome: 'Paulo',
    cor: 'Negro',
}

const _filho = {
    nome: 'João',
}

Object.setPrototypeOf(_filho, _pai)
console.log(_filho.x)
console.log()

let array = [9, 4]

function ax(...Y) {
    for (let i = 0; i < Y.length; i++) {
        array.push(Y[i])
    }
    Y = Y.reduce(function (ac, at) {
        return ac * at
    },0.7)
    array = Y
    return Y
}

ax(9, 4, 5, 6, 7)
console.log(array)