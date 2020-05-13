// Temos Objetos tipo __dirname, process, etc.
// A partir do Objeto "Process" a gente consegue ler dados do teclado do Usuario e Imprimir

// Vamos fazer exemplo Usando "Process"
// A gente já imprimi usando "console.log()" agora vamos usar o "Process"

// Se entrar no termianl e usar --> node Entrada-e-Saída.js -a    Esse "-a" é um flag

const anonimo = process.argv.indexOf("-a") !== -1 // A flag que tou querendo é "-a" que tem que ser diferente de "-1"
console.log(anonimo) // Essa é a forma de pegar parametros no Terminal
// se eu usar no Terminal = node Entrada-e-Saída.js -a  ele vai retornar "true", porque existe a flag -a
// se eu usar no Terminal = node Entrada-e-Saída.js -b  ele vai retornar "false", porque ela não existe

if(anonimo) // Se for True
{// Ele vai Imprimir "Fala Anonimo" no terminal
    process.stdout.write("Fala Anonimo!\n")
    process.exit() // <-- Aqui ele mata o Processo
} // usando node Entrada-e-Saída.js -a ele vai imprimir "True" e "fala Anonimo"
else // Caso não seje digitado nada, eu vou digitar o nome
{
    process.stdout.write("Informe seu Nome: ") // Imprimir no Terminal!
    process.stdin.on("data", data => // stdin -> Entrada Padrão -- Evento on "data", o evento on data ocorre quando eu 
                                    //digito algo e dou "Enter", ou seja acabei de entrar com Dados
    {
        const nome = data.toString().replace("\n", "") // tou removendo o "\n" trocando por uma linha vazia
        // Também irei botar para imprimir
        process.stdout.write(`Eae ${nome}!! \n`)
        process.exit()
    })
}

// Então executando, passando apenas a flag -a -> node Entrada-e-Saídas.js -a ele ira imprimir "Fala Anonimo"
// Se eu executar node Entrada-e-Saída.js ele ira pedir para eu digitar -> "Fala Vini" 