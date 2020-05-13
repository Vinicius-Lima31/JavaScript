console.log(typeof String) // Toda função tem um atributo chamado .prototype
console.log(typeof Array)
console.log(typeof Object)

//Uma tecnica 
String.prototype.reverse = function () { // reverter uma string
    return this.split('').reverse().join('') // maneira de adcionar novas tecnicas
} // tem que ter sempre this

console.log('Escola Cod3r'.reverse()) // consigo acessar as funções que coloco dentro de prototipo de String

Array.prototype.pri = function () 
{
    return this[0] // this serve para acessar
}

console.log()
console.log([5, 6, 4, 7, 8].pri())
console.log(['a', 'b', 'c'].pri())

/*String.prototype.toString = function () {
    return 'Lascou Tudo'
}*/

console.log('Escola Cod3r'.reverse()) // tem que ter cuidado em substituir alguma função, adequado é que nem faça

String.prototype.troca = function () {
    return this.replace('z','s')
}

console.log('Caza'.troca())
console.log('Carroz'.troca())