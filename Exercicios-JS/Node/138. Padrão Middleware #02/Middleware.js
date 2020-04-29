// Middleware patterns (Cadeia de Responsabilidade)

// Primeiramente irei criar algumas funções com nomes
// Recebendo "ctx" Que é um objeto, e um next que é uma função, que vai passar de um para outro

const passo1 = (ctx, next) => // --> "ctx" é um objeto
{
    ctx.valor1 = "mid1" // Os nomes das Variaveis tem que ser Difentes sempres
    next()  // Next é uma função que pula para proxima etapa
}

const passo2 = (ctx, next) => // --> "ctx" é um objeto
{
    ctx.valor2 = "mid2" // Os nomes das Variaveis tem que ser Difentes sempres
    next()  // Next é uma função que pula para proxima etapa
}

// --> "ctx" é um objeto
const passo3 = (ctx) => ctx.valor3 = "mid3"  // Os nomes das Variaveis tem que ser Difentes sempres
// no "passo3" eu não coloquei o next, pq eu não quero pular para proxima


// "ctx" o objeto, ""...middlewares" os parametros que eu vou jogar dentro do objeto "ctx"
const exec = (ctx, ...middlewares) =>  // Essa função vai receber o contexto == ctx
{   // Também vai receber um conjunto, no array "middlewares"
    // A ideia é passar varias funções e juntar dentro de um "array"

    const execPasso = indice => // Crio outra função, ela vai receber o indice do "array"
    {
        // Aqui na linha de baixo, eu vou fazer condições, sera executado se todas as condições for true

        middlewares && indice < middlewares.length && // Aqui eu vejo se o array foi setado, e depois verifico se o indice é menor que o tamanho do array, pq não pode ser
        // Passo o indice aqui 0,1,2
        middlewares[indice](ctx, () => execPasso(indice + 1)) // eu passo "contexto atual" e também o "next" porém o next eu passo em função
        // Eu fiz uma recursividade, chamei a propria função, incrementando o indice para o próximo

        // Eu também vou precisar disparar a função, porque ela não executa sozinha
    }

    execPasso(0) // Tenho que executar ela uma vez pelo menos, já que ela não ira executar sozinho, ao menos que alguem chame!
}

// Para passar eu crio um objeto

const ctx = {}
exec(ctx, passo1, passo3, passo2) // vai pegar esses 3 parametros, vai juntar em um array(...) e faço aplicacões dentro dele.
// Posso altear a ordem sem problemas, o passo3 não chama o next, então ele acaba ali mesmo!

console.log(ctx)
// { valor1: 'mid1', valor3: 'mid3' } lembrando que o "passo3" não avança, então ele é o ultimo, por isso ele não vai pro "passo2"
// Se fosse exec(ctx, passo3, passo1, passo2) ==> { valor3: 'mid3' }
