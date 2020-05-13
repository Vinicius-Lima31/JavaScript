class Pessoa {  // class é uma função escrita diferente
    constructor(nome) { // "constructor" forma de construir em class, sera mais falado disso para frente
        this.nome = nome
    }

    falar() {
        console.log(`Meu Nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const CriarPessoa = nome => {   //Não preciso do This, porque a função tem noção do seu local de origem, a variavel nome sera encontrada sem problemas
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = CriarPessoa('Vitor')
//const p3 = new CriarPessoa('Paula')     // <<<<<----------
p2.falar()


/*  Pegando essa class no Browser = documentsByTagName('body')[0].onclikc = p1.falar()
Significa que quando eu clicar ele tem que falar, porem aparece "Meu nome é undefined

 Porem isso não acontece com função Factory */

function cp(name) {
    return {
        falar: () => console.log(`Nome = ${name}`)
    }
}

const p4 = new cp('Vini')
p4.falar()