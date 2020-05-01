// Na verdade Array é um Objeto
console.log(typeof Array, typeof new Array, typeof [])
// Array literal é um Objeto

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Uma forma de Criar Array, mais não é bom fzr assim
console.log(aprovados)

console.log()
aprovados = ['Bia', 'Carlos', 'Ana'] // Jeito certo
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length) // Imprimindo tamanho do Array

aprovados[9] = 'Rafael' // vai ter array, entre o que foi declaro e posição 9, porem tudo undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log()

console.log(aprovados)
console.log()
aprovados.sort() // Ordenou em ordem o Array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Consigo adcionar e excluir, significa que a primeira posição "Carlos" sera excluida 1, no caso o proprio carlos, se eu coloco 2, ele excluiria carlos e Ana
console.log(aprovados) // exclui e adciona
aprovados.splice(2, 0, 'Vinícius', 'Maria')
console.log(aprovados)