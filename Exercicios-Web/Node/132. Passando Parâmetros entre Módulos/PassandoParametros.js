// Apenas dando uma relembrada nesses " ... " antes de começar a aula
function a (...as)
{
    return as // Ele retorna um Array
}

const s = a(1, 4, 54, 7, 2, 3, 4, 8)
console.log(s.sort()) // "sort()" Organiza em ordem um Array"

module.exports = function (...nome) // --> Exportando, "nome" é um array, os "..." são a quantidade de parametros
{
    return nome.map(n => `Boa Semana ${n}`) // Acessando o Array e retornando uma frase
}

