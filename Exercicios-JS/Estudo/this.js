let pessoa = 'João'
console.log(this.nome)
console.log(global.pessoa)

function trem() {
    console.log(`${pessoa} esta pegando trem`)
    console.log(this.pessoa)
}

trem()

const arrow = {
    teste: 52,
    fc() { return this.teste }
}

console.log(arrow.fc())
console.log()


this.a = 5
console.log(this)