/* 
    Link Turma C: http://files.cod3r.com.br/curso-js/turmaA.json
    Link Turma B: http://files.cod3r.com.br/curso-js/turmaB.json
    Link Turma C: http://files.cod3r.com.br/curso-js/turmaC.json
*/

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

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")]) 
    .then(uArray => [].concat(...uArray))
    .then(nomes => nomes.map(e => e.nome))
    .then(imprimir => console.log(imprimir))
