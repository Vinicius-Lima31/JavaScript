//Armazendo uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

/*Armazendo uma função arrow em uma variavel
 Forma reduzida de construir uma função                                                                                                                                                                                                                                                         */
const soma = (a, b) => { //Essa setinha substitui a função
    return a + b
}

console.log(soma(2, 3))

//retorno Implicito
const subtracao = (a, b) => a - b //Extremamante curto => arrow
// retorno da função "a - b"

console.log(subtracao(2, 3)) // -1

//esse recurso de Arrow é novo, adcionado JS 2015

const imprimir2 = a => console.log(a)   // Função chamada Imprimir2, recebe um unico elemento como parametro e retorna console.log(a)
imprimir2('legal!!')                    // chamada a função imprimir2, é usado console.log e imprimido o conteúdo

let x =[]
x.push(2,5,49)

console.log(x[0])
const potencia = (a,b) => Math.pow(a,b)
const quadrado = a => a*a
const mult = (a,b) => a*b 
console.log('\n')
console.log(potencia(x[2],x[0]))
console.log(mult(x[0],x[1]))
console.log(quadrado(x[0]))

console.log(x.length)//Quantas posições