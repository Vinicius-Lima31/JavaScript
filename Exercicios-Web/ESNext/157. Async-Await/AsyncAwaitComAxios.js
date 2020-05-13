// Usando "axios"

const axios = require('axios')
const getTurma1 = letra => 
{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => 
    {
        try 
        {
            resolve(axios.get(url))
        } 
        catch(e) 
        {
            reject(e)
        }
    })
}
 
let obterAlunos1 = async () => 
{
    const ta = await getTurma1('A')
    const tb = await getTurma1('B')
    const tc = await getTurma1('C')
    
    const getNome = a => a.data.map(f=>f.nome)
 
    return [].concat(getNome(ta), getNome(tb), getNome(tc))
}
 
obterAlunos1()
    .then(nomes => console.log(nomes))

// Feito por min:

//const axios = require('axios')
 
const getTurma2 = letra => 
{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => 
    {
        try 
        {
            axios.get(url)
            .then(res =>
                {
                    resolve(res.data)
                })
        } 
        catch(e) 
        {
            reject(e)
        }
    })
}
 
let obterAlunos2 = async () => 
{
    const ta = await getTurma2('A')
    const tb = await getTurma2('B')
    const tc = await getTurma2('C')
    
 
    return [].concat(ta, tb, tc)
}
 
obterAlunos2()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))