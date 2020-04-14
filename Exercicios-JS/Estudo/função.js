function soma(x, y) {
    return x + y
}
function div(x, y) {
    return x / y
}
function mult(x, y) {
    return x * y
}



function op(x, y, o = soma) {
    console.log(o(x, y))
}
console.log(`Multiplicação`, mult(5,2))
console.log('Divisão', div(10,2))