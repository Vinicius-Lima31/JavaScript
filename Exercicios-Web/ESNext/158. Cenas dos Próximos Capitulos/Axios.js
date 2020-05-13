const axios = require("axios")

const getTurma = (letra) =>
{
    const URL = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    axios.get(URL).then(response =>
    {
        try
        {
            let aluno = response.data
            aluno = aluno.map(n => n.nome)
            console.log(aluno)
        }
        catch(e)
        {
            console.log(e)
        }
    })
}

getTurma("A")