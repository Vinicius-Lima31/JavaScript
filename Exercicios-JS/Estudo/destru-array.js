const array = [1, 3, 0, 4, 9]
console.log(array)
// destru

const [x, y, z] = array

console.log(x, y, z)

//
const op = (a, b) => a + b
const up = {
    idade: 19,
    tempo: 3
}
console.log(op(up.idade, up.tempo))

const { idade: i, tempo:t } = up //foi destruturada com nome de i
console.log('Destruturada =', i, t)
console.log(op(i,t))

console.log(op(x,y))