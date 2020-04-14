const dados = {
    pessoa1: {
        nome: 'Vini',
        nasc: 1999
    },
    
    idade: function () {
        let date = new Date()
        let nas = date.getFullYear()
        return nas - this.pessoa1.nasc
    }
}

console.log(dados)
console.log(dados.idade())

// Função Construtora
function pessoa(nome, nasc, CPF){
    this.nome = nome
    this.nasc = nasc
    this.CPF = CPF
    this.idade = function(){
        let ano = new Date()
        let anoAtual = ano.getFullYear()
        return anoAtual - this.nasc
    }

}
console.log('\n')
const p1 = new pessoa('Carlos', 1998, 175645214890)
console.log(`Nome: ${p1.nome}
Idade: ${p1.idade()}
CPF: ${p1.CPF}`)

console.log()