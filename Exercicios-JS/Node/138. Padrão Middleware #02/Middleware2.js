const passo1 = (objeto, next) =>
{
    objeto.valor1 = "Passo 1 A"
    next()
}

const passo2 = (objeto, next) =>
{
    objeto.valor2 = "Passo 2 B"
    next()
}

const passo3 = (objeto, next) =>
{
    objeto.valor3 = "Passo 3 C"
    next()
}

const passo4 = (objeto) => objeto.valor4 = "Passo 4 D"


const exec = (objeto, ...FuncaoParamArray) =>
{
    const execPassos = (indiceDoArray) =>
    {
        FuncaoParamArray && indiceDoArray < FuncaoParamArray.length &&
        FuncaoParamArray[indiceDoArray] (objeto, () => execPassos(indiceDoArray + 1) )
    }
    execPassos(0)
}

const objeto = {}
const objeto2 = {}
exec(objeto, passo1, passo2, passo3, passo4)
console.log(objeto)

exec(objeto2, passo2, passo4, passo3)
console.log(objeto2)