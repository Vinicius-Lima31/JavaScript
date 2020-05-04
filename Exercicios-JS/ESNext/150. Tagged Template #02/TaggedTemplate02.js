function real(partes, ...valores) // "partes" é uma "String" completa, no vídeo ta melhor explicado
{                                 // "valores" é os valores que passo como parametros -> "preco", "precoParcela"
    const resultado = []
    valores.forEach((valor, indice) =>
    {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`

        // "isNan" verifica se é um número, e faz a condição usando operador ternario
        // "toFixed(2)" --> 2 casas decimais

        resultado.push(partes[indice], valor) // "partes" é a string completa
    })
    return resultado.join("")
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)
