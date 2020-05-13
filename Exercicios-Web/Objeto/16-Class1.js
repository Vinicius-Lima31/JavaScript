// OO, é centrado em função tbm, CLASS é uma função
class Lancamento { // essa class sera transformado em uma funcao construtora
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancx) {
        lancx.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorC = 0
        this.lancamentos.forEach(l => {
            valorC += l.valor
        })
        return `Tudo pago = ${valorC}`
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

console.log(contas.lancamentos)