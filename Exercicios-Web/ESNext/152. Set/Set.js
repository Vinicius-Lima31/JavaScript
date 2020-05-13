// Uma estrutura que foi adcionada recentemente
// Uma não-indexisada que não aceita repetições

const times = new Set() // Criei um Set
times.add("Vasco") // Adcionei "Vasco" no "times"
times.add("São Paulo").add("Botafogo").add("Corinthians")
times.add("Grêmio")
times.add("Vasco") // Eu repeti o "Vasco"

console.log(times) // ele não ira imprimir "Vasco" 2 vezes

console.log(times.size) // Quantidades de Elementos
console.log(times.has("Vasco")) // "has" ver se existe "Vasco" dentro do "Set"
console.log(times.delete("Grêmio"))
console.log(times.has("Grêmio")) // false, deletei na linha anterior

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"] // "Lucas" foi repetido
const nomesSet = new Set(nomes) // Passei "nomes", ele criou um "Set" com "nomes" (Array) de elementos

console.log(nomesSet) // Não vai repetir o "Lucas"