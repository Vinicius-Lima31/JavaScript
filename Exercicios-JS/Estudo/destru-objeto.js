const p = {
    nome: 'vini',
    idade: 19
}

// destru
const { nome: name, idade: anos } = p
console.log(name)   //transformei em 2 variaveis acessiveis
console.log(anos)  // foram destruturadas
// destruturei variaveis do objeto, e ainda renomeie

console.log('\n', p)
