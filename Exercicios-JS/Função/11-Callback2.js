const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0, 4.5]
//Objetivo pegar as notas menores que 7 e botar em um novo array

//Sem Callback
const notasBaixas1 = []
const notasAltas1 = []
let teste = []
for (i in notas) {
    if (notas[i] < 7)
        notasBaixas1.push(notas[i])
    else if (notas[i] >= 7)
        notasAltas1.push(notas[i])
}

console.log(`Aprovado = ${notasAltas1}`)
console.log(`Reprovado = ${notasBaixas1}`)




//Com Callback
// que e uma função que vai filtrar os elementos de um Array em cima de um criterio
//Não é alterado o Array principal
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)
const funcao = n => n>7 

const notasAltas2 = notas.filter(nota => nota > 7)
console.log(notasAltas2)
teste = notas.filter(funcao)
console.log('Notas Altas = ', '>',teste,'<')

/* Sintaxe
                ex1 = ex2.filter(function)              */
console.log('\n')
const array = []
for (i=1; i<11; i++){
    array.push(i*5)
}     
        
console.log(`Valores dentro do Array = ${array}`)

function div10(d){
    if(d%10==0)
        console.log(d)
}
array.forEach(div10)

const div4 = array.filter(n => {
    n=n-1
    return n%4==0
})
console.log(div4)