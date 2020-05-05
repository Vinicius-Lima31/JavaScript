const http =  require("http")

const getTurma = letra =>
{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>
    {
        http.get(url, response =>
        {
            let resultado = ""
            response.on("data", dadosParaPassar => // de um em um
            {
                resultado += dadosParaPassar
            })

            response.on("end", () =>
            {
                resolve(JSON.parse(resultado))
            })
        })
    })
}

const obterAlunos = async () =>
{
    const ta = await getTurma("A")
    const tb = await getTurma("B")
    const tc = await getTurma("C")

    return [].concat(ta, tb, tc)
}

obterAlunos()
    .then((alunos => alunos.map(al => al.nome)))
    .then(imp => console.log(imp))
    