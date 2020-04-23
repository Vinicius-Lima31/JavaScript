const url = "http://files.cod3r.com.br/curso-js/funcionarios.json" // Vamos importar a url
 
const axios = require("axios") // Vamos importar o "axios"

axios.get(url).then(response =>
{
    const funcionarios = response.data
    console.log(funcionarios)   // Sera imprimido tudo da url
})

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

/*
        Aula 133. Instalando Deps & Scripts

    Primeiramente vamos Excluir a pasta "node_modules" que possui nossas dependencias
    Segundamente vamos no "package.json" e abrimos ele, temos exatamente isso aqui:

    {
        "name": "Funcionarios",
        "version": "1.0.0",
        "description": "",              
        "main": "Funcionarios.js", <-- o arquivo principal eu mudo para Funcionarios.js
        "scripts": {                    o Arquivo principal era index.js, porem eu troquei para Funcionarios.js

            "start": "nodemon" <--- Vai pegar a dependencia nodemon para executar
            "dev": "nodemon"   <--- Tanto o "start" quanto o "dev" os 2 irão executar o arquivo principal que o "Funcionarios.js" <-- main

            Em outras palavras ele vai executar o "start" no "Funcionarios" usando o "npm start"
            Executar o "dev" usando "npm run dev"
            Ele ira executar o metodo principal utilizando o nodemon

            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "dependencies": {
            "axios": "^0.19.2" <-- Minha dependencia
        }
    }

    Depois disso tudo, vamos no Terminal
    "npm i" <-- ele ira instalar todas dependecias novamente, a partir das informações do "package.json"
    ira recriar o "node_modules"

    usando o "npm start" ele ira startar o nodem no arquivo principal "Funcionarios.js"
    Isso tudo usando um Script

*/

// https://docs.npmjs.com/misc/scripts
// Documentação dos Scripts