// Cadeia de Prototipos (prototype chain)
Object.prototype.at99 = '0' // aqui no caso é o prototipo principal, e at foi atribuido
// Não faça isso, que esta acima

const avo = { at1: 'A' } // avo tem Object.prototype como prototipo
const pai = { __proto__: avo, at2: 'B', at3: '3' } // pai tem avo como prototipo
const filho = { __proto__: pai, at3: 'C' } // filho tem pai como prototipo


console.log(filho.at1) // filho nao tem at1, pai não tem at1, mais avo tem, ele procurou lá
console.log(filho.at0) // Não tem at0
console.log('Do Prototipo principal = ', filho.at99) // Como avo tem como prototipo Object.prototype, eu adcionei la

console.log(filho.at, filho.at1, filho.at2, filho.at3) // at3 ele vai responder o primeiro que acho, tem no filho e no pai, porem achou primeiro no filho
// ele sombreou do pai
console.log()

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax)
            this.velAtual += delta
        else
            this.velAtual = this.velMax
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing, sobreamento de escopo mais abragente
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    } //this é pro objeto atual, super chamar metodo do meu prototipo
}

// Função muito importante
Object.setPrototypeOf(ferrari, carro) //ferrari tem carro como seu prototipo, 1° tem objeto, 2° prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())