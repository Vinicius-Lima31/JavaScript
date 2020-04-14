const sequencia = {
    _valor: 1, // Convensão, essa é uma variavel que so vai ser mexida dentro do objeto
    get valor() { return this._valor++ },
    set valor(valor) {  // se eu tentar acrescentar valor menor não funcionara, não entrara aqui
        if (valor > this._valor)
            this._valor = valor
    }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor)
//Internamente ele está acessando metodo get e metodo set
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900   // Não funcionou, porque no "Set" ele só pega valores maiores
console.log(sequencia.valor, sequencia.valor)
console.log(sequencia)
console.log()

const data = {
    _dia: 1,
    _mes: 1,
    _ano: 1900,
    get dia() { return this._dia },
    get mes() { return this._mes },
    get ano() { return this._ano },

    set dia(dia) {
        if (dia > 0 && dia < 32)
            this._dia = dia
    },
    set mes(mes) {
        if (mes > 0 && mes < 13)
            this._mes = mes
    },
    set ano(ano) {
        if (ano >= 1900 && ano <= 2019)
            this._ano = ano
    }
}

data.dia = 21
data.mes = 9
data.ano = 1999
console.log(`Data Nascimento: ${data.dia}/${data.mes}/${data.ano}`)

data.dia = 18
data.mes = 7
data.ano = 2019
console.log(`Data Atual: ${data.dia}/${data.mes}/${data.ano}`)

let hoje = new Date()
let dia = hoje.getDate()
let mes = hoje.getMonth() + 1
let ano = hoje.getFullYear()

console.log(`Data Atual: ${dia}/${mes}/${ano}`)