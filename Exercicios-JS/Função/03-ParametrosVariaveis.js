function soma() { //Passando paramentros sem ter parametros
    let soma = 0  //propriedade 'arguments' para recuperar parametros
    for (i in arguments) {
        soma += arguments[i] // arguments é um array interno
    }
    return soma
}

console.log(soma()) // Não foi passado parametro, entao é 0
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 3.3, "Teste"))
console.log(soma('a', 'b', 'c')) // como soma vale zero, entao 0abc

//POr min

function pd() {
    for (i in arguments)
        arguments[i] = arguments[i] + 2 // arguments[0] é o primeiro parametro, +2
    console.log(arguments[0]) // >>> 2+2 = 4 linha 27
    console.log(arguments[1]) // arguments é um array 9 + 2 = 11 linha 27
    console.log(arguments[2]) // 6 + 2 = 8 linha 27


}

pd(2,9,6)