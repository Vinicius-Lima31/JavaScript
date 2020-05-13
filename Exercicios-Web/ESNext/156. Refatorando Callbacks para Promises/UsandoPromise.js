/* 
    Link Turma C: http://files.cod3r.com.br/curso-js/turmaA.json
    Link Turma B: http://files.cod3r.com.br/curso-js/turmaB.json
    Link Turma C: http://files.cod3r.com.br/curso-js/turmaC.json
*/

//  Com "Promisse"
const http = require("http") 

const getTurma = letra => // Agora vai receber um único parametro que é a letra
{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` 
    return new Promise((resolve, reject) => // Lembra que pasamos 2 parametros, "resolve" e "reject"
    {// 2 callbacks: resolve e reject, um aceita outro rejeita

        http.get(url, res => 
        {
            let resultado = ""
            res.on("data", dados => // Aqui os dados são passado de 1 á 1
            {
                resultado += dados 
            })
        
            res.on("end", () => 
            {
                // Aqui vamos fazer um try e catch
                try
                {
                    resolve(JSON.parse(resultado)) // Aqui passa o "certo"
                }
                catch(e)
                {
                    reject(e) // Aqui o errado!
                }
            })
        }) 
    })
} 


let nomes = [] 
getTurma("A").then(alunos => // Aqui é uma chamada sequencial, 1 por 1
{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma("B").then(alunos =>
    {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
    })
    getTurma("C").thenss(alunos =>
    {
        nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
        console.log(nomes) // Ira imprimir tudo, igual da aula passada 155
    })
})

// Só que existe de formas mais interessantes

// Tenho que passar um Array dentro de "Promisse.all" porque eu vou passar mais de uma coisa
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")]) // Essa função eu posso passar varias "promises" para ela, e quando todas as promises foram resolvida ele vai chamar
    // .then(imprimir => console.log(imprimir)) Aqui eu estaria imprimindo tudo de uma vez
    .then(turmas => [].concat(...turmas)) // aqui eu peguei as turmas, e "espalhei" dentro de um Array vario, usando o "Spred" para espalhar
    .then(alunos => alunos.map(n => n.nome))
    .then(imprimir => console.log(imprimir)) // Imprimi tudo!
    .catch(e => console.log(e.message)) // Tratamento de erro. É muito importante usar o catch
    // fica muito mais simplles do que "Callback" dentro de "Callback"
    // Aqui ele espera tudo ser feito para disparar