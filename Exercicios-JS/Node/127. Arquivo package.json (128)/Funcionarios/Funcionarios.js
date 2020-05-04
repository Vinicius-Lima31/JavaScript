/*
    Criei uma pasta chamada Funcionarios
    Antes de tudo vamos explicar o que foi feito antes no terminal

    npm init <-- Para criar meu "package.json" porem, tem varias perguntas quando crio
    npm init -y <-- aqui eu crio meu "package.json" porem ele diz "sim" para todas as perguntas
    npm i --save axios <-- Criei uma dependencia e com o "save" eu criei uma pasta mais detalhadas

*/

/*  
    Vou acessar um arquivo que esta no seguinte endereço:
    http://files.cod3r.com.br/curso-js/funcionarios.json
    É um arquivo json que está preenchido de Funcionarios nele
*/

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json" // Vamos importar a url
 
// o "axios" faz requisições para obter Informações de algo "remoto". Ele é uma dependencia que faz isso!
const axios = require("axios") // Vamos importar o "axios"

// Será mais explicado mais a frente o que ira acontecer aqui abaixo
// "get" eu obtenho informações do servidor
axios.get(url).then( response =>
{
    const funcionarios = response.data // "data" pego todos os dados, feito para pegar, peguei e joguei na constante funcionarios
    console.log(funcionarios)   // Sera imprimido tudo da url
})

/*
        -----------------Aula128 -----------------
    Desafio: Procurar uma mulher Chinesa com Menor Salario "Aula128"
*/

const chineses = f => f.pais === "China" // Vamos em um "filter()"
const mulheres = f => f.genero == "F"   // Vamos em um "filter()"

const menorSalario = (funcionario, funcionarioAtual) => // Vamos usar essa aqui em um "reduce()"
{
    // Usando "Operador Ternario" se salario do "funcionario" for menor ele retornar "funcionario" senão ele retorna "funcionarioAtual"
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
} 

console.log("\n\n\n")

axios.get(url).then(response =>
{
        const funcionarios = response.data
        //console.log(funcionarios) Sera imprimido tudo da url
        const func = funcionarios
            .filter(chineses)
            .filter(mulheres)
            .reduce(menorSalario)

        console.log(func)
})

