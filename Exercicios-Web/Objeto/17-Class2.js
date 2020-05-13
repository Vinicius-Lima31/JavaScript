class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // definindo Pai com prototipo Avo, estou definindo relação de prototipo "extends"
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // chamo construtor de avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva') // ele vai chamar constructor Pai
    }
}

const filho = new Filho
console.log(filho)
const avo = new Avo('Silva')
const pai = new Pai
console.log(pai)
console.log(avo)

//...

const Animal = {
    respirar () {
        console.log('Respirando...');
    }
}
 
const cachorro = {
    latir() {
        super.respirar()
        console.log('Woof Woof!');
    }
}
 
Object.setPrototypeOf(cachorro, Animal)
 
cachorro.latir()