function falarDepoisDe(segundos, frase)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => 
        {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(10, "Olá") // Sera executado em 10 segundos...
.then(frase => frase.concat(" Tudo Bem?"))
.then(resultado => console.log(resultado))
.catch(error => console.log(error))