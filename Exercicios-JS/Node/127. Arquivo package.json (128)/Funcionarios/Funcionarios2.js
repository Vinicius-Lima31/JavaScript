const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

axios.get(url).then((response, error) => // Usando Callback
{
    try
    {
        const funcionarios = response.data
        console.log(funcionarios)
    }
    catch(error)
    {
        console.error(error)
    }
})

const chineses = f => f.pais === "China" 
const mulheres = f => f.genero == "F"  

const menorSalario = (funcionario, funcionarioAtual) => 
{
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
} 

console.log("\n\n\n")

axios.get(url).then(response =>
{
        const funcionarios = response.data
        const func = funcionarios
            .filter(chineses)
            .filter(mulheres)
            .reduce(menorSalario)

        console.log(func)
})

