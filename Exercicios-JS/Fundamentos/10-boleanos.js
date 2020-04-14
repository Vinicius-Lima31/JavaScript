let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // <-- ! --> Exclamação operador lógico, ele é o NÃO
//Negando 2 vezes a variavel isAtivo, ela se torna verdadeira, uma simples tecnica
//Conferindo se 1 é verdadeiro ou falso
console.log(!isAtivo) //um Exclamçaõ ele inverte, ou seja false
console.log(!false) // Imprimindo inverso de false, ou seja, VERDADEIRA "true"

//Tudo diferente de 0(zero) é true (verdadeiro)
//Tudo isso abaixo é verdadeiro
console.log('\nos verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // aqui tem espaço dentro da string
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('\nos falsos...')
console.log(!!0)
console.log(!!'') // se tiver vazio é falso
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\npra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'desconhecido')
//variavel 'nome' é falso, porem 'desconhecido é verdeiro
