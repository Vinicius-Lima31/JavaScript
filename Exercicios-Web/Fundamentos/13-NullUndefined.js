let valor //Não inicializa
console.log(valor) //Valor Inicial é Undefined pq nao foi atribuido nada a ela

valor = null /*Não tem nenhum valor e nenhum endereço
                Ausência de Valor*/
console.log(valor)

/*Atribuir o valor Null para uma variavel, objeto,
algo do tipo, que eu quero que não aponde para lugar nenhum
*/
let s = { nome: 's' }
s = null
console.log(s) //Não aponte pra nada
//Não é muito adequado usar Undefined, Null é o padrão, sempre use Null caso queira zerar variavel

const produto = {}
console.log(produto.preco) //Undifined pq nao esta definido preco no produto
console.log(produto) // {} conjuto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evitar Atribuir Undefined
// delete produto.preco <<- caso eu queira tirar ->>
console.log(!!produto.preco) //false
console.log(produto)    // { preco: undifined}

produto.preco = null // sem preço
console.log(!!produto.preco) //false
console.log(produto) // {preco: null}

let n = 72
console.log(n.toString(2)) //bin