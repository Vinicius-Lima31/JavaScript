// Formas de criar Objetos em JS
// Usando a Notação Literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome // publico, visivel para fora do objeto
    this.getPrecoDesc = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log((p1.getPrecoDesc()).toFixed(2), (p2.getPrecoDesc()).toFixed(2))
p1.nome = 'Lapiseira'
console.log(p1)

// Função Factory
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30 * (30 - faltas))
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())
console.log(f1)

// Object.create
const filha= Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto....
const fromJSON = JSON.parse('{"info": "Sou um JSON"}') //converti esse texto em um objeto
console.log(fromJSON.info)
