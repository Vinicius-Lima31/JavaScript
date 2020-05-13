const axios = require("axios")

const getTurma = (letra) =>
{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>
    {
        axios.get(url).then(res =>
        {
            try
            {
                let imp = res.data
                imp = imp.map(alunos => alunos.nome)
                resolve(imp)
            }
            catch(e)
            {
                reject(e)
            }
        })
    })
}

getTurma("C")
    .then(imp => console.log(imp))