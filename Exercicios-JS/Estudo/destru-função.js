
// Destru em função obj
function rand({ max = 1000, min = 0 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 500, min: 10 }))

// Destru em função array
function rand1([max = 1000, min = 0]) {
    if (min > max)
        max = min
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand1([max = 10000, min = 9000]))