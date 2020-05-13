/*
    Recurso Novo..

    "Promises" é uma promessa

    O "promises" é parecido com callback, ele trabalha de forma Assicrona

    Ele possui o resultado ou a rejeição
*/

function falarDepoisDe(segundos, frase)
{
    return new Promise((resolve, reject) => // São os 2 nomes que por padrão colocamos, um aceita outro rejeita a "promessa"
    {
        setTimeout(() => // Vai executar depois do eu tempo que eu determinar
        {
            // Promise só recebe apenas 1 parametro, sempre 1, se eu fizer assim:
    //      resolve(frase, "abc") --> vai acarretar em erro! só aceita apenas 1 parametro  
            resolve(frase) // "Resolve" recebe frase

        }, segundos * 1000) // Vai ser executado após os segundos que eu definir nos parametros
    })
}

/*
    Para acessar a resposta de uma "promessa" usammos o "then" passando a frase
    e um arron function.
    O legal do "then" é que conssigo encadear chamadas atras de chamadas uma atrás da outra
*/
// Passei 3 segundos, e a frase "Que Legal!"
falarDepoisDe(3, "Que Legal!") // tenho que usar o "then"
.then(frase => frase.concat("?!?!")) // da pra usar o "then" de forma encadeada
.then(outraFrase => console.log(outraFrase)) // Imprimiu depois de 3 segundos
.catch(e => console.log(e)) // se fosse rejeitado iria imprimir isso aqui! Tratamento do erro usamos o catch

// Eu uso o "then" para acessar resposta do "promise"