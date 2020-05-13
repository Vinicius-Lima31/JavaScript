// Um novo Recurso ES8
// Async Await
// Objetivo é simplificar o uso de código assincrona

// Copiando 1° parte do Código da Aula Passada:
const http = require("http")

const getTurma = letra =>
{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>
    {
        let resultado = ""
        http.get(url, res =>
        {
            res.on("data", dados =>
            {
                resultado += dados
            })

            res.on("end", () =>
            {
                try
                {
                    resolve(JSON.parse(resultado))
                }
                catch(e)
                {
                    reject(e)
                }
            })
        })
    })
}

// Como trabalhar com essa função, de forma sicrona do que parece, é um recurso bem recente
// Objetivo de simplificar o uso de "promises"

// A palavra "Await" só vai funcionar dentro de uma função marcada com "Async"
let obterAlunos = async() =>  //1° coisa é criar essa função e marcar ela com a palavra "async"
{
    // Agora tenho a possibilidade de usar Await
    const ta = await getTurma("A") // Não precisei usar o "then" trabalhei de uma forma mais reduzida
    const tb = await getTurma("B") // Não precisei usar o "then" trabalhei de uma forma mais reduzida
    const tc = await getTurma("C") // Não precisei usar o "then" trabalhei de uma forma mais reduzida
    // O resultado da chamada da função, vai para as "constantes"

    return [].concat(ta, tb, tc) // Concateno todas as turmas, e terei um Array com todas as turmas nele
} // Retorna um Objeto do tipo AsyncFunction

obterAlunos() /// chamo a função
    .then(alunos => alunos.map(a => a.nome)) // Depois eu chamo função "then" encima do "AsyncFunction"
    .then(nomes => console.log(nomes))

// Eu uso "then" eu tenho de fato acesso do que a função retornou

// Não posso usar "Await" com uma função que não esteja marcada com "Async"
