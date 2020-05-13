function rand([min = 0, max = 1000]) //2 atributos que foi destruturado de um Array
{//oq vc recebe nao é o array, é 2 atributos
    if (min > max) [min, max] = [max, min] //troca
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40])) // no Objeto ficava claro quem era max e min, aqui no array nao, só e passado 2 numeros
console.log(rand([992])) // entre 992 e 1000
console.log(rand([,10])) // entre 0 e 10
console.log(rand([])) //  entre 0 e 1000
console.log(rand([20,10]))