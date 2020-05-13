/* 
    Nessa aula sera um desafio!
    Nos vamos precisar obter 3 arquivos JSON, de 3 turmas de alunos diferentes
    Turma A, B, C 
    Cada link abaixo é de cada turma:

    Link Turma C: http://files.cod3r.com.br/curso-js/turmaA.json
    Link Turma B: http://files.cod3r.com.br/curso-js/turmaB.json
    Link Turma C: http://files.cod3r.com.br/curso-js/turmaC.json
    Cada aluno tendo: id, nome e imagem

    Para que a gente possa extrair apenas os nomes desses arquivos JSON


    Nessa Aula iremos usar "Callback", na próxima aula iremos usar o "Promise"
*/

// Nesse cenario irei mostrar, que "Callback" "não nos favorece", e sim "Promise"

// Sem promise

// http -> modulo Interno do Node
const http = require("http") // Que é um modulo do Próprio "Node", existem outras bibliotecas, inclusive o "axios" que ja usamos, "axios" é baseado em "promise"

// vamos Criar uma função
const getTurma = (letra, callback) => // essa "letra" é para compor a "URL" . E um "callback" que sera chamado quando um arquivo "JSON" estiver totalmente carregado
{
    // Vamos monstar a string da URL, usando uma "template String" passando "letra"
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` // "letra" definira qual URL eu irei estar acessando

    http.get(url, res => // usando "http" com método "get", recebendo a URL, mais um callback
    {
        // Em cima da Reposta(res), é que eu vou conseguir receber os dados, essa resposta vão vim uma por uma, por isso eu necessito concatenar tudo, para juntar todas
        let resultado = "" // Tem que ser uma let, porque vou ficar sobrescrevendo

        res.on("data", dados => // dados, será os dados que estou recebendo, um por um
        {
            resultado += dados // Aqui estou concatenando
        })

        // No final quando todos os dados tiverem sido recebidos, vamos disparar outra chamada!
        res.on("end", () => // terminou de chegar os dados "end"
        {
            // Agora eu teria que converter o JSON para Objeto
            callback(JSON.parse(resultado))
        })
    }) 
} // Esse "getTurma" recebe uma letra e uma callback, porém eu quero tanto receber nomes de alunos da turma a,b e c


// Crio um Array, para preencher com dados dos alunos das turmas

let nomes = [] // let, porque eu vou sobrescrever

getTurma("A", alunos => // alunos é uma Callback
{
//  console.log(alunos) Aqui de fato eu tenho um Array com todos elementos
    console.log(alunos[0].nome) // Tou acessando uma Posição e um Atributo

    // o Array nome criado na linha 54
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
    //console.log(nomes) Imprimi tudo na linha76

    // E seu eu quiser imprimir todos, A B C ?
    // Eu continuo aqui dentro, porém uma dentro da outra
    getTurma("B", alunos => // passando uma nova callback
    {
        nomes = nomes.concat(alunos.map(b => `Turma B: ${b.nome}`))
//      console.log(nome) eu poderia usar aqui, iria imprimir turma A e B, porem eu vou colocar abaixo, para imprimir tudo
    })

    getTurma("C", alunos =>
    {
        nomes = nomes.concat(alunos.map(c => `Turma C: ${c.nome}`))
        console.log(nomes) // Aqui eu tou imprimindo tudo, A B e C
    })
}) 
// Quando tem um callback dentro da outra, dentro da outra, isso fica meio bagunçado, e é ae que entra o "Promise"
// Fica complicado de ler


/*
    end e data:
        Por padrão, recebemos da web uma stream de dados, ou seja, os dados não vem por completo,
        tipo como se você estivesse fazendo o download de um arquivo mas já pudesse abrir ele sendo
        que aos poucos o resto do arquivo vai aparecendo. O data, é um listener que notifica quando 
        chega um chunk, uma parte do dado enquanto o end informa quando o "download" termina. Sacou?

        Quando recebemos dados do frontend, não recebemos todos os dados de uma vez, eles vem por partes, 
        o "on data" sinaliza toda vez que você recebe uma parte(chunk) desses dados. Já o "on end"  sinaliza 
        o fim do recebimento dos dados.
*/

/*
    o motivo para usa-la aninhada seria para garantir a ordem de execução e impedir que uma resposta 
    concluída finalize a outra antes da resposta ter sido entregue.

*/
