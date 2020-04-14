// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função

//Contexto Léxico em Ação

const x = 'Global'

function fora() {
    const x = 'local'       // eu poderia fazer assim
    function dentro() {     //  return function(){
        return x            //      return x     }
    }
    return dentro
}

//Uma função em JS é um Closures, a função lembra das suas origens
const minhaFuncao = fora()
console.log(minhaFuncao()) // Local