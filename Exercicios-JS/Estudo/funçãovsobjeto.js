const Cadastro = function (nome, idade) {
    this.nome = nome // para apontar, mesma coisa que fizemos com bind
    this.idade = idade
}

const c1 = new Cadastro('vini', 19)
console.log(c1)