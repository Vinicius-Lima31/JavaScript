let array = [1, 2, 3, 4, 5, 6]
console.log(array.reverse())
console.log(array.join()) // foi juntada tudo

console.log(array.reduce(function (ac, at) {   // somei tudo
    return ac + at
}))


class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }
}


const aula = {
    bdia() {
        console.log('\nOla Alunos! \n')
    }
}

const aluno = {
    al() {
        super.bdia()
        console.log('- Bom dia Professor')
    }
}

Object.setPrototypeOf(aluno, aula)

aluno.al()

const animal = {
    respirar() {
        console.log('\nRespirando...')
    }
}

const casa = {
    __proto__: animal,
    gato() {
        super.respirar()
        console.log('Miau')
    },
    cachorro() {
        super.respirar()
        console.log('Au Au Au')
    }
}

casa.gato()
casa.cachorro()
//Super e this são mesma coisa, o que muda é o nome e tals

let v = 'Vinícius'
let m = 'Marcella'
let p = `Paula`
let m1 = `Maria`
let M = `Marcelo`
let mb = `Mabi`
function st(x) {
    return x.split('').reverse().join()
}

console.log(st(v))
console.log(st(m))
console.log(st(p))
console.log(st(m1))
console.log(st(M))
console.log(st(mb))