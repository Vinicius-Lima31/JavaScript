// "File System" é um Modulo responsavel por ler, escrever, alterar, verificar conteudo,, etc.
const fs = require("fs") // <-- é um Modulo que já vem no Node, apenas importei ele
// "fs" é uma dependencia interna que ja vem no Node

const caminho = __dirname + "/arquivo.json" // <-- __dirname é sempre o diretório em que o script atualmente em execução reside
/* o __dirname é onde o "ArquivoLeitura.js" está, eu concatenei aonde o arquivo está + "Arquivo.json" assim eu vou acessar o diretorio dele



    -------"Sicrona"--------
Ler um arquivo de Forma "Sicrona", ou seja, Ele ficara lendo esse arquivo, o event Loop ficara travado até ler o arquivo completamente
Não é muito indicado para arquivos grandes, porque ele atrasara tudo, para arquivos pequenos não tem problema, pois seria rapido, e o event lopp não ficaria parado por muito tempo


                                "caminho" é o diretorio do "Arquivo.json"                                                                                                             */
const conteudo = fs.readFileSync(caminho, 'utf-8') /* <- ou seja, leia de forma sicrona, se for um arquivo grande ele vai demorar, só vai mostrar conteudo após ler tudo!
                        Tenho que passar o tipo de encod, no caso é "utf-8"                                                                                                         */

console.log(conteudo) /* Imprimi tudo que estava no "arquivo.json"


    ------- Assicrona--------
Essa ja é mais interessante, ao contrario da outra que o event loop fica pausado até obter a resposta
Esse aqui já não faz isso!                                                                                                                                                                                      */

fs.readFile(caminho, "utf-8", (err, conteudo) => // Aqui eu passo uma "Callback"
{
    const config = JSON.parse(conteudo) // Aqui esse "conteudo" é uma string e não um Objeto, tenho que converter JSON.parse()

    console.log(`${config.db.host}: ${config.db.port}`) // localhost: 5432

}) 

// é possivel ler "arquivo.json" sem precisa importar o "fs"
// De forma bem Simples

const config = require("./arquivo.json") // Aqui eu sou Obrigado a passar ".json" porque o node por padrão ler sempre ".js"
console.log(config.db)

// Essa aqui é uma forma Sicrona, percebe que ele foi imprimido penultima e não ultima
// Já o "fs.readFile" que é "Assicrona", foi imprimido por ultimo, porque ele só ira imprimir quando tiver tudo feito

// Pra finalizar também mostraria a leitura de uma pasta usando o "FS"

fs.readdir(__dirname, (err, arquivos) => // "Callback" passo o erro e o conteudo
{   // Ler o Diretorio
    console.log("Conteúdo da Pasta")
    console.log(arquivos)
}) // Assicrona, só ira imprimir quando estiver pronta


/*
    Traduzindo tudo:
    Sicrona = Vai parar o Event Loop e vai imprimir na hora, vai parar tudo para ele fazer
        ou seja, o resultado vai sair praticamente na mesmo hora.
        se for um Arquivo pequeno não vai causar impacto porque sera feito rapido, porém
        se for grande, ira atrasar as outras coisas

    Assicrona =  O evento Loop vai continuar rodando, só vai imprimir quando estiver pronta,
        ou seja, o resultado vai sair quando estiver pronto, podendo sair na hora ou não.
        não atrasa nada, porque só sera executado quando estiver pronto, independente das outras coisas.
*/
