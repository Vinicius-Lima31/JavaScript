//Artificio
function Pessoa() {
    this.idade = 0

    const self = this // Já que self = this na linha 4 esta sendo executando diretamente dentro de pessoa
    //amarzenei this no self, uma constante, nao mudara nunca
    //self vai sempre apontar para pessoa
    setInterval(function () {
        self.idade++
        console.log(self.idade)
        console.log(self)
    }/*bind()this*/, 1000)
}
new Pessoa
