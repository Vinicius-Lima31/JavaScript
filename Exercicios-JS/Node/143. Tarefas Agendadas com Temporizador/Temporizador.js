// O Próprio JavaScript possui temporizador, como o "setInterval" Mas iremos baixar um
// Chamado "node-schedule" que é um dos pacotes de "Node" que da essas funções de agendamento
// Vou instalar a Dependencia dentro da pasta "Exercicio.js" na pasta Principal

// "npm i node-schedule@1.3.0 -E" Instalei essa versão!

// Agora vamos importar
const schedule = require("node-schedule")

const tarefa1 = schedule.scheduleJob("*/5 * 16 * * 3", function() // <-- Aqui dentro vou passar uma String
{   // Crio uma função associada a esse time

    console.log("Executando Tarefa 1!", new Date().getSeconds()) // Ira Executar a cada 5 segundos
    // newDate().getSeconds() --> Função que mostra os Segundos
})                                     

/* 
    * /5 -> De 5 em 5 Segundos
    * -> Qualquer Minuto (Ignorando os Minutos)
    16 -> é a hora, executar na hora 15
    * -> Qualquer dia do Mês (Ignorando dia)
    * -> Também vou ignorar o Mês
    3 -> Vai executar na Quarta-feira 

    Lendo oque foi feito acima fica assim: "Executa na Quarta-feira, em qualquer mês, em qualquer dia, as 15 horas, em qualquer minuto, a cada 5 segundos"
    Se eu usasse apenas ("5") ao em vez de (* /5), ele iria executar apenas uma vez em 5 segundos, usando o (* /5) ele executa a cada 5 segundos!

    0 -> Domingo
    1 -> Segunda-Feira
    2 -> Terça-Feira
    3 -> Quarta-Feira
    4 -> Quinta-Feira
    5 -> Sexta-Feira
    6 -> Sabado
*/

// Vou usar um Temporizador Padrão do JavaScript "setTimeout"
setTimeout(function() // <-- Sera executado em 20 Segundos
{
    tarefa1.cancel() // <-- É uma forma de cancelar o Temporizador
    console.log("Cancelando Tarefa 1!")
},20000) // Em 20 segundos

// setImmediate -> Dispara de imediato
// setInterval -> Dispara de tempo em tempo


// Agora vamos Criar uma Regra de Negócio
const regra = new schedule.RecurrenceRule() // Dentro da "regra" eu coloco os valores que eu quero usar para a regra
regra.dayOfWeek = [new schedule.Range(1, 5)] // "dayOfWeek" -> Dias da Semana! Vai executar de Segunda-Feira até Sexta-Feira
regra.hour = 16 // Hora a ser Executado, as 16 horas
regra.second = 30 // Segundos 30, Sempre que o Segundo da 30 ele executa


const tarefa2 = schedule.scheduleJob(regra, function() // Aqui eu passo a "regra" de negocio, "regra" possui os dados de hora, dia, etc...
{
    console.log("Executando Tarefa 2!", new Date().getSeconds()) // <-- Imprimindo os Segundos
})