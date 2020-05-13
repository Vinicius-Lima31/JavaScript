const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o Primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // adciona na primeira posição... un shift
console.log(pilotos)

// splice pode adcionar e remover elementos de um Array

// adcionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // posição 3 removendo 1
console.log(pilotos)

const pilotos1 = pilotos.slice(2) // slice cria um novo array, apartir de um indice
console.log(pilotos1) // a partir do indice 2 adiante

const pilotos2 = pilotos.slice(1, 4) // ultimo indice não entra
console.log(pilotos2)