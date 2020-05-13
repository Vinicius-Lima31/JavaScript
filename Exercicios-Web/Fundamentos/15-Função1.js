/*Função sem retorno
    <--function-->
    Palavra Reservada para Função */
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Não daria erro, estaria somando 2 + Undefined = NaN
imprimirSoma(3, 4, 5, 6, 7, 8, 9) //Ele vai pegar os 2 primeiros e o resto vai ignorar
imprimirSoma() //Não daria erro, apenas não seria passado nada

//Função com retorno
function soma(a, b = 0) { //b = 0 é algo novo quer dizer que por padrao variavel a b é zero
    return a + b
}

//soma(2,3) Não seria imprimido nada
console.log(soma(9, 11)) // é retornado o valor da função, 9 + 6
console.log(soma(2)) // como botei por padrao de b= 0, entao retorna 2 + 0 = 2

function multiplicacao(a, b) {
    let o
    o = a * b
    return o
}
let x = 9
let y = 9.51
console.log(multiplicacao(x, y).toFixed(1))
console.log(multiplicacao(x,y).toString(2))