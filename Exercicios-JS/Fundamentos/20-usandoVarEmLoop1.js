for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i) //Sera Imprimido 10, porque é a condição final, como i é igual a 10, o laço finaliza
//Porque é um var, esta presente dentro e fora do laço
console.log('\n')

let j //variavel global
for (j = 0; j < 5; j++) {
    console.log(j)
}
console.log(j) //Valor 5 sera imprimido sem problemas o valor dentro do laço
console.log('\n')

for (let x = 0; x < 7; x++) {
    console.log(x)
}
//console.log(x) daria erro, a variavel so existe dentro do bloco