// Map é como se fosse um objeto de outra forma, é algo que não é muito usado, mas é como se tentasse substituir um objeto

const tecnologias = new Map() // Declarei tipo "Map"

// Uso "set" para criar um nome "objeto"
tecnologias.set("React", {framework: false})
tecnologias.set("Angular", {framework: true})


// Percebe que se eu tentar acessar com um simples: tecnologias.React não vai funcionar
console.log(tecnologias.React) // undefined
// Preciso usar um "get"

console.log(tecnologias.get("React")) // Funcionou
console.log(tecnologias.get("Angular").framework) // true
console.log(tecnologias)


const chavesVariadas = new Map
([
    // chave        valor
    [function() {}, "Função"],
    [{}, "Objeto"],
    [123, "Número"],
])

chavesVariadas.forEach((vl, ch) =>
{
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // "has(123)" verifica se tenho chave chamada "123" dentro do "Map", se tiver ele retorna "true"
chavesVariadas.delete(123) // deletado "123"
console.log(chavesVariadas.has(123)) /// Vai retornar "false", porque eu deletei o "123"

console.log(chavesVariadas.size) // retorna o tamanho

// "Map" não pode ter chaves repetidas, apenas valores

chavesVariadas.set(123, "a") // Percebe que a chave "123" repete aqui
chavesVariadas.set(123, "b") // e também aqui, porque são iguais
chavesVariadas.set(456, "b")

console.log(chavesVariadas)
