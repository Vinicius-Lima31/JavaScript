let dobro = function (a) { //função literal, normal..
    return 2 * a
}

//Do primeiro function pro segundo mudou apenas a setinha pro function
dobro = (a) => { // sobrescrevendo um let usando Arrow Function, lembrando que " => " representa uma function
    return 2 * a
}

dobro = a => 2 * a // return Implícito
// Aqui retorno implicito, muito usado para função de 1 linha
//Muito útil ter função com uma unica senteça de código

console.log(dobro(Math.PI)) //Dobro do Pi

let ola = function () {
    return 'Olá'
}

//a De baixo melhor forma
ola = () => 'Olá' // Eu posso usar blocos, igual o segundo exemplo, porem, eu teria que usar o return, se não ele retornaria undefined
ola = _ => 'Olá' // possui um param

//Criando uma função sem parametros eu tenho que usar o () sempre, igual ola = () ....
console.log(ola())